import { useCallback, useEffect, useRef, useState } from "react";
import { getPokemons } from "../api";
import {
  Cards,
  Loader,
  LoadMoreButton,
  PageLayout,
  SearchField,
} from "../components";
import { PageTitle } from "../components/layout";
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

  /**
   * Função para carregar os Pokémons com base no limite e deslocamento fornecidos.
   * Ela define o estado de carregamento como verdadeiro, busca os Pokémons
   * e, em seguida, atualiza os estados de dados e dados filtrados com os resultados.
   * @param {Object} params - Parâmetros de busca.
   * @param {number} params.limit - O número máximo de Pokémons a serem carregados.
   * @param {number} params.offset - O deslocamento para a busca de Pokémons.
   * @returns {Promise<void>}
   */
  const loadPokemons = useCallback(
    async ({ limit, offset } = {}) => {
      setIsLoading(true);
      const result = await getPokemons({ limit, offset, delay: 750 });

      setData((prev) => [...prev, ...result.data]);
      setFilteredData((prev) => [...prev, ...result.data]);

      setNext(result.nextPage);
      setIsLoading(false);
    },
    [setData, setFilteredData, setIsLoading, setNext],
  );

  /**
   * Função para filtrar os Pokémons com base no termo de busca fornecido.
   * Ela atualiza o estado de dados filtrados com os Pokémons que correspondem
   * ao termo de busca, ignorando maiúsculas e minúsculas.
   * @param {string} term - O termo de busca para filtrar os Pokémons.
   * @returns {void}
   */
  const handleSearch = useCallback(
    (term) => {
      setFilteredData(() => {
        if (!term) return data;

        return data.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(term.toLowerCase()),
        );
      });
    },
    [data, setFilteredData],
  );

  /**
   * Função para carregar mais Pokémons quando o botão "Carregar Mais" é clicado.
   * Ela calcula o novo deslocamento, chama a função `loadPokemons` com o novo
   * deslocamento e atualiza o estado de deslocamento.
   * @returns {void}
   */
  const handleLoadMore = useCallback(() => {
    const newOffset = offset + CARDS_PER_PAGE;
    loadPokemons({ limit: CARDS_PER_PAGE, offset: newOffset });
    setOffset(newOffset);
  }, [loadPokemons, offset, setOffset]);

  /**
   * Efeito colateral que é executado quando o componente é montado.
   * Ele verifica se é a primeira renderização e se não há dados carregados.
   * Se for o caso, ele chama a função `loadPokemons` para carregar os Pokémons
   * iniciais com o limite e deslocamento definidos.
   */
  useEffect(() => {
    if (firstRender.current && data.length === 0) {
      firstRender.current = false;
      loadPokemons({ limit: CARDS_PER_PAGE, offset: 0 });
    }
  }, [data.length, loadPokemons]);

  return (
    <PageLayout>
      <Loader isVisible={isLoading} />

      <PageTitle>Pokémons</PageTitle>

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
