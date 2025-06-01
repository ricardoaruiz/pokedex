import { BackButton, Cards, PageLayout } from "../components";
import { useFavoriteContext } from "../context/FavoriteContext";

export function PokemonFavoritesPage() {
  const { favorites } = useFavoriteContext();
  return (
    <PageLayout>
      <div className="w-full max-w-[1200px] mx-auto px-2 flex flex-col gap-8 ">
        <BackButton to="/" />
      </div>
      <h2 className="text-3xl/relaxed font-bold text-center">
        Your favorites Pokemons!
      </h2>
      <Cards data={favorites} isLoading={false} showEmptyDescription={false} />
    </PageLayout>
  );
}
