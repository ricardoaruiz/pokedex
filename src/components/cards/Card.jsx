import { useFavoriteContext } from "../../context/FavoriteContext";
import { cn } from "../../utils";
import { FavoriteButton } from "../buttons/FavoriteButton";
import { Tag } from "../Tag";

/**
 * Esse componente é responsável por renderizar um cartão de Pokémon.
 * Ele exibe informações como o nome, ID, tipos e imagem do Pokémon.
 * O cartão possui um efeito de hover que aumenta o tamanho e adiciona uma sombra.
 * @param {*} param0
 * @returns {JSX.Element}
 */
export function Card({ pokemon }) {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useFavoriteContext();
  const isInFavorites = isFavorite(pokemon.id);

  /**
   * Função para lidar com o clique no botão de favorito.
   * Ela impede a propagação do evento e a ação padrão,
   * e alterna o estado de favorito do Pokémon.
   * Se o Pokémon já estiver nos favoritos, ele é removido;
   * caso contrário, ele é adicionado aos favoritos.
   * @param {*} event
   */
  const handleToggleFavorite = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (isInFavorites) {
      removeFromFavorites(pokemon.id);
      return;
    }
    addToFavorites(pokemon);
  };

  return (
    <div className="shadow-amber-00 relative flex h-[150px] w-full cursor-pointer justify-between rounded-xl bg-slate-950 p-4 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-200 md:max-w-[350px]">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FavoriteButton
            isFavorite={isInFavorites}
            onClick={handleToggleFavorite}
            showLabel={false}
          />
          <p className={cn("text-base text-gray-400")}>#{pokemon.id}</p>
        </div>
        <p className="text-2xl font-bold md:text-3xl">{pokemon.name}</p>

        <div className="flex gap-2">
          {pokemon.types.map((type) => (
            <Tag size="sm" key={type}>
              {type}
            </Tag>
          ))}
        </div>
      </div>

      <img
        src={pokemon.sprites.mainImage}
        alt={pokemon.name}
        className="absolute -top-10 right-0 w-40"
      />
    </div>
  );
}
