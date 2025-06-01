import { Link, useLocation } from "react-router-dom";
import { useFavoriteContext } from "../../context/FavoriteContext";
import { cn } from "../../utils";

/**
 * Componente responsável por renderizar o menu de navegação da aplicação.
 * Ele exibe links para as páginas de Pokémons e Favoritos.
 * O link para Favoritos exibe um contador com o número de Pokémons favoritos.
 * O estilo do link ativo é destacado com uma cor diferente.
 * @component
 * @example
 * return (
 *   <Menu />
 * );
 * @returns
 */
export function Menu() {
  const { pathname } = useLocation();
  const { favorites } = useFavoriteContext();
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className={cn(
              "text-base font-semibold transition-all hover:text-amber-400 md:text-lg",
              pathname === "/" && "text-amber-300",
            )}
          >
            Pokémons
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            className={cn(
              "relative text-base font-semibold transition-all hover:text-amber-400 md:text-lg",
              pathname === "/favorites" && "text-amber-300",
            )}
          >
            Favorites
            {favorites.length > 0 && (
              <span
                className={cn(
                  "absolute -top-4 -right-4 flex h-6 w-6 items-center justify-center rounded-full bg-amber-300 font-bold text-slate-950",
                )}
              >
                {favorites.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
