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

  const handleToggleFavorite = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (isInFavorites) {
      removeFromFavorites(pokemon.id);
    } else {
      addToFavorites(pokemon);
    }
  };

  return (
    <div
      className="
      flex justify-between relative 
      bg-slate-950 w-full md:max-w-[350px] h-[150px] p-4 rounded-xl 
      shadow-sm shadow-amber-00
      hover:scale-105 hover:shadow-amber-200 hover:shadow-lg
      transition-transform duration-300 cursor-pointer
      "
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FavoriteButton
            isFavorite={isInFavorites}
            onClick={handleToggleFavorite}
            showLabel={false}
          />
          <p className={cn("text-base text-gray-400")}>#{pokemon.id}</p>
        </div>
        <p className="text-2xl md:text-3xl font-bold">{pokemon.name}</p>

        <div className="flex gap-2">
          {pokemon.types.map((type) => (
            <Tag key={type}>{type}</Tag>
          ))}
        </div>
      </div>

      <img
        src={pokemon.sprites.mainImage}
        alt={pokemon.name}
        className="w-40 absolute -top-10 right-0"
      />
    </div>
  );
}
