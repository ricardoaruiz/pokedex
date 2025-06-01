import { LoaderPinwheel } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../api";
import {
  BackButton,
  FavoriteButton,
  OverLayer,
  PageLayout,
  PokemonStats,
} from "../components";
import { Tag } from "../components/Tag";
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

  const loadPokemonById = useCallback(async (id) => {
    setIsLoading(true);
    const data = await getPokemonById({ id, delay: 750 });
    setData(data);
    setIsLoading(false);
  }, []);

  const toggleFavorite = useCallback(() => {
    isFavorite(data.id) ? removeFromFavorites(data.id) : addToFavorites(data);
  }, [addToFavorites, data, isFavorite, removeFromFavorites]);

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
      <OverLayer isVisible={isLoading}>
        <div className="flex gap-4">
          <LoaderPinwheel className="w-16 h-16 text-amber-200 animate-spin" />
          loading...
        </div>
      </OverLayer>

      {data && !isLoading && (
        <div className="justify-between max-w-[1200px] mx-auto px-2 flex flex-col items-center gap-8">
          <div className="flex justify-between items-center w-full">
            <BackButton to="/" />

            <FavoriteButton
              isFavorite={isFavorite(data.id)}
              onClick={toggleFavorite}
            />
          </div>

          <div className="flex flex-col items-center gap-4 bg-slate-950 p-6 rounded-xl shadow-lg shadow-amber-200 w-full">
            <h1 className="text-5xl font-bold">{data.name}</h1>

            <img
              src={data.sprites.mainImage}
              alt={data.name}
              className="w-full h-auto max-w-xs"
            />

            <ul className="flex gap-4">
              {data.height && (
                <li>
                  <Tag>Height: {data.height}</Tag>
                </li>
              )}
              {data.weight && (
                <li>
                  <Tag>Weight: {data.weight}</Tag>
                </li>
              )}
              {data.base_experience && (
                <li>
                  <Tag>Base Experience: {data.base_experience}</Tag>
                </li>
              )}
              {data.types.map((type) => (
                <li key={type}>
                  <Tag>{type}</Tag>
                </li>
              ))}
            </ul>

            <PokemonStats stats={data.stats} />
          </div>
        </div>
      )}
    </PageLayout>
  );
}
