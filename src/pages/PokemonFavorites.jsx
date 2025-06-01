import { Cards, PageLayout } from "../components";
import { PageTitle } from "../components/layout";
import { useFavoriteContext } from "../context/FavoriteContext";

/**
 * Esse componente é responsável por renderizar a página de Pokémons favoritos.
 * Ele utiliza o contexto de favoritos para acessar os dados dos Pokémons
 * que foram marcados como favoritos e exibe esses dados em um layout de página.
 * @returns {JSX.Element}
 */
export function PokemonFavoritesPage() {
  const { favorites } = useFavoriteContext();

  return (
    <PageLayout>
      <PageTitle>My favorites Pokemons!</PageTitle>
      <Cards data={favorites} isLoading={false} showEmptyDescription={false} />
    </PageLayout>
  );
}
