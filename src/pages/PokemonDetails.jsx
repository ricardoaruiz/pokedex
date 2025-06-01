import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../api";
import {
  BackButton,
  FavoriteButton,
  Loader,
  PageLayout,
  PokemonFeatures,
  PokemonStats,
  PokemonTypes,
} from "../components";
import { PageTitle } from "../components/layout";
import { useFavoriteContext } from "../context/FavoriteContext";
import { useListContext } from "../context/ListContext";

/**
 * Esse componente é responsável por renderizar os detalhes de um Pokémon.
 * Ele utiliza o contexto de lista para acessar os dados dos Pokémons
 * e a função `getPokemonById` para buscar os dados do Pokémon selecionado.
 * Ele exibe informações como nome, imagem, altura, peso, experiência base,
 * tipos e estatísticas do Pokémon.
 * @returns {JSX.Element}
 */
export function PokemonDetailsPage() {
  const { id } = useParams();
  const { data: cachedData } = useListContext();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useFavoriteContext();

  /**
   * Função para carregar os dados de um Pokémon pelo ID.
   * Ela define o estado de carregamento como verdadeiro, busca os dados do Pokémon
   * e, em seguida, define o estado de carregamento como falso.
   * @param {number} id - O ID do Pokémon a ser carregado.
   * @returns {Promise<void>}
   */
  const loadPokemonById = useCallback(async (id) => {
    setIsLoading(true);
    const data = await getPokemonById({ id, delay: 750 });
    setData(data);
    setIsLoading(false);
  }, []);

  /**
   * Função para alternar o estado de favorito do Pokémon.
   * Se o Pokémon já for favorito, ele é removido dos favoritos;
   * caso contrário, ele é adicionado aos favoritos.
   * @returns {void}
   */
  const toggleFavorite = useCallback(() => {
    isFavorite(data.id) ? removeFromFavorites(data.id) : addToFavorites(data);
  }, [addToFavorites, data, isFavorite, removeFromFavorites]);

  /**
   * Efeito colateral que é executado quando o componente é montado ou quando
   * o ID do Pokémon muda. Ele verifica se os dados do Pokémon já estão
   * em cache. Se estiverem, ele define os dados no estado; caso contrário,
   * ele chama a função `loadPokemonById` para buscar os dados do Pokémon.
   * @returns {void}
   */
  useEffect(() => {
    const pokemon = cachedData.find((p) => p.id === parseInt(id, 10));

    if (pokemon) {
      setData(pokemon);
      return;
    }

    loadPokemonById(id);
  }, [cachedData, id, loadPokemonById]);

  return (
    <PageLayout>
      <Loader isVisible={isLoading} />

      {data && !isLoading && (
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 px-2">
          <PageTitle>Details</PageTitle>

          <div className="flex w-full items-center justify-between">
            <BackButton to="/">Go to list</BackButton>

            <FavoriteButton
              isFavorite={isFavorite(data.id)}
              onClick={toggleFavorite}
            />
          </div>

          <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-slate-950 p-6 shadow-lg shadow-amber-200">
            <h2 className="text-5xl font-bold">{data.name}</h2>

            <img
              src={data.sprites.mainImage}
              alt={data.name}
              className="h-auto w-full max-w-xs"
            />

            <PokemonTypes types={data.types} />
            <PokemonFeatures pokemon={data} />
            <PokemonStats stats={data.stats} />
          </div>
        </div>
      )}
    </PageLayout>
  );
}
