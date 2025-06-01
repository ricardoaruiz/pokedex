import { Tag } from "../Tag";

/**
 * Esse componente é responsável por renderizar as características de um Pokémon.
 * Ele exibe informações como altura, peso e experiência base do Pokémon
 * em uma lista de tags estilizadas.
 * @param {Object} param0 - Propriedades do componente.
 * @param {Object} param0.pokemon - O objeto Pokémon contendo suas características.
 * @returns {JSX.Element} - Um elemento <ul> contendo as características do Pokémon.
 * @example
 * // Exemplo de uso:
 * const pikachu = {
 *   height: "0.4 m",
 *   weight: "6.0 kg",
 *   base_experience: 112
 * };
 * <PokemonFeatures pokemon={pikachu} />
 */
export function PokemonFeatures({ pokemon }) {
  return (
    <ul className="flex gap-4">
      {pokemon.height && (
        <li>
          <Tag size="lg">Height: {pokemon.height}</Tag>
        </li>
      )}
      {pokemon.weight && (
        <li>
          <Tag size="lg">Weight: {pokemon.weight}</Tag>
        </li>
      )}
      {pokemon.base_experience && (
        <li>
          <Tag size="lg">Base Experience: {pokemon.base_experience}</Tag>
        </li>
      )}
    </ul>
  );
}
