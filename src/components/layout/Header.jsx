import { Link, useLocation } from "react-router-dom";
import { useFavoriteContext } from "../../context/FavoriteContext";
import { cn } from "../../utils";

/**
 * Esse componente é responsável por renderizar o cabeçalho da aplicação.
 * Ele exibe o título da aplicação e um link para a página de favoritos.
 * @returns {JSX.Element}
 */
export function Header() {
  const { pathname } = useLocation();
  const { favorites } = useFavoriteContext();
  return (
    <header className="bg-slate-950 text-white p-4 shadow-sm shadow-amber-100 fixed flex items-center top-0 left-0 right-0 h-20 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Pokemon App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className={cn(
                  "hover:text-amber-400 transition-all text-lg font-semibold",
                  pathname === "/" && "text-amber-300"
                )}
              >
                List Pokemons
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className={cn(
                  "relative hover:text-amber-400 transition-all text-lg font-semibold",
                  pathname === "/favorites" && "text-amber-300"
                )}
              >
                My Favorites
                {favorites.length > 0 && (
                  <span
                    className={cn(
                      "absolute bg-amber-300 w-6 h-6 flex items-center justify-center rounded-full -top-4 -right-4 text-slate-950 font-bold"
                    )}
                  >
                    {favorites.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
