import { LoaderPinwheel } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { getPokemons } from "../api";
import {
  Cards,
  LoadMoreButton,
  OverLayer,
  PageLayout,
  SearchField,
} from "../components";
import { useListContext } from "../context/ListContext";

const CARDS_PER_PAGE = 12;

/**
 * Esse componente é responsável por renderizar a lista de Pokémons.
 * Ele utiliza o contexto de lista para gerenciar os dados dos Pokémons,
 * o estado de carregamento e a lógica de busca e paginação.
 * @returns {JSX.Element}
 */
export function PokemonListPage() {
  const firstRender = useRef(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data,
    setData,
    filteredData,
    setFilteredData,
    offset,
    setOffset,
    next,
    setNext,
  } = useListContext();

  const hasNext = !!next;
  const hasData = filteredData.length > 0;

  const loadPokemons = useCallback(
    async ({ limit, offset } = {}) => {
      setIsLoading(true);
      const result = await getPokemons({ limit, offset, delay: 750 });

      setData((prev) => [...prev, ...result.data]);
      setFilteredData((prev) => [...prev, ...result.data]);

      setNext(result.nextPage);
      setIsLoading(false);
    },
    [setData, setFilteredData, setIsLoading, setNext]
  );

  const handleSearch = useCallback(
    (term) => {
      setFilteredData(() => {
        if (!term) return data;

        return data.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(term.toLowerCase())
        );
      });
    },
    [data, setFilteredData]
  );

  const handleLoadMore = useCallback(() => {
    const newOffset = offset + CARDS_PER_PAGE;
    loadPokemons({ limit: CARDS_PER_PAGE, offset: newOffset });
    setOffset(newOffset);
  }, [loadPokemons, offset, setOffset]);

  useEffect(() => {
    if (firstRender.current && data.length === 0) {
      firstRender.current = false;
      loadPokemons({ limit: CARDS_PER_PAGE, offset: 0 });
    }
  }, [data.length, loadPokemons]);

  return (
    <PageLayout>
      <OverLayer isVisible={isLoading}>
        <div className="flex gap-4">
          <LoaderPinwheel className="w-16 h-16 text-amber-200 animate-spin" />
          loading...
        </div>
      </OverLayer>

      <SearchField
        placeholder="Search for pokemons that are already listed below"
        className="w-full lg:w-1/2"
        onSearch={handleSearch}
      />

      <Cards data={filteredData} isLoading={isLoading} />

      <LoadMoreButton
        visible={hasNext && hasData}
        isLoading={isLoading}
        className="w-full lg:w-1/2"
        onClick={handleLoadMore}
      />
    </PageLayout>
  );
}
