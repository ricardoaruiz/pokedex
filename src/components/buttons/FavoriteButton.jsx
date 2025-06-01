import { HeartMinusIcon, HeartPlusIcon } from "lucide-react";
import { cn } from "../../utils";

export function FavoriteButton({ isFavorite, showLabel = true, onClick }) {
  const label = isFavorite ? "Remove from Favorites" : "Add to Favorites";

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 text-lg text-slate-200 hover:text-amber-200 transition-colors cursor-pointer",
        isFavorite
          ? "text-red-500 hover:text-red-600"
          : "text-white hover:text-amber-300"
      )}
    >
      {isFavorite ? <HeartMinusIcon size={28} /> : <HeartPlusIcon size={28} />}
      {!showLabel ? "" : label}
    </button>
  );
}
