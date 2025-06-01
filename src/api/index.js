import { capitalize } from "../utils";
import { get } from "./fetch";
import { forceDelay } from "./utils";

const BASE_URL = "https://pokeapi.co/api/v2";

/**
 * Essa função é responsável por buscar um Pokémon pelo ID.
 * Ela faz uma requisição para a PokeAPI e retorna os dados do Pokémon formatados.
 * @param {{ id: number, delay?: number }} param0
 * @returns {Promise<{ id: number, name: string, height: number, weight: number, types: string[], abilities: string[], stats: { name: string, value: number }[], sprites: { mainImage: string } }>}
 */
export async function getPokemonById({ id, delay }) {
  await forceDelay(delay);
  const pokemonData = await get(BASE_URL, `pokemon/${id}`);
  return buildPokemonData(pokemonData);
}

/**
 * Essa função é responsável por buscar uma lista de Pokémons.
 * Ela faz uma requisição para a PokeAPI e retorna os dados dos Pokémons formatados.
 * @param {{ limit?: number, offset?: number, delay?: number }} param0
 * @returns {Promise<{ count: number, nextPage: string | null, previousPage: string | null, data: Array<{ id: number, name: string, height: number, weight: number, types: string[], abilities: string[], stats: { name: string, value: number }[], sprites: { mainImage: string } }> }>}
 */
export async function getPokemons({ limit, offset, delay } = {}) {
  await forceDelay(delay);

  const listData = await get(
    BASE_URL,
    `pokemon?limit=${limit ?? 12}&offset=${offset ?? 0}`
  );

  const pokemonsPromise = listData.results.map(
    async (pokemon) =>
      await get(BASE_URL, pokemon.url.replace(BASE_URL + "/", ""))
  );

  const pokemonsData = await Promise.all(pokemonsPromise);

  const data = pokemonsData.map((pokemonData) => {
    return buildPokemonData(pokemonData);
  });

  return {
    count: listData.count,
    nextPage: listData.next,
    previousPage: listData.previous,
    data,
  };
}

/**
 * Essa função é responsável por formatar os dados do Pokémon.
 * Ela recebe os dados brutos do Pokémon e retorna um objeto com as informações formatadas.
 * @param {Object} data - Dados brutos do Pokémon
 * @returns {Object} Dados formatados do Pokémon
 */
function buildPokemonData(data) {
  return {
    id: data.id,
    name: capitalize(data.name),
    height: data.height,
    weight: data.weight,
    types: data.types.map((type) => capitalize(type.type.name)),
    abilities: data.abilities.map((ability) =>
      capitalize(ability.ability.name)
    ),
    stats: data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    sprites: {
      mainImage: data.sprites.other["official-artwork"].front_default,
    },
  };
}
