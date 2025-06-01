import { HeartMinusIcon, HeartPlusIcon } from "lucide-react";
import { cn } from "../../utils";

/**
 * Esse componente é responsável por renderizar um botão de favorito.
 * Ele exibe um ícone de coração com um sinal de mais ou menos,
 * dependendo se o item está marcado como favorito ou não.
 * O botão também pode exibir um rótulo opcional e chama uma função de callback
 * quando clicado.
 * @param {Object} param0 - Propriedades do componente.
 * @param {boolean} param0.isFavorite - Indica se o item é favorito.
 * @param {boolean} [param0.showLabel=true] - Indica se o rótulo deve ser exibido.
 * @param {function} param0.onClick - Função de callback a ser chamada quando o botão é clicado.
 * @return {JSX.Element}
 */
export function FavoriteButton({ isFavorite, showLabel = true, onClick }) {
  const label = isFavorite ? "Remove from Favorites" : "Add to Favorites";

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex cursor-pointer items-center gap-2 text-lg text-slate-200 transition-colors hover:text-amber-200",
        isFavorite
          ? "text-red-500 hover:text-red-600"
          : "text-white hover:text-amber-300",
      )}
    >
      {!showLabel ? "" : label}
      {isFavorite ? <HeartMinusIcon size={28} /> : <HeartPlusIcon size={28} />}
    </button>
  );
}
