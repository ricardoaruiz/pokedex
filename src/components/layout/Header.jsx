import { Link } from "react-router-dom";
import { Menu } from "./Menu";

/**
 * Esse componente é responsável por renderizar o cabeçalho da aplicação.
 * Ele exibe o título da aplicação e um link para a página de favoritos.
 * @returns {JSX.Element}
 */
export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-20 items-center bg-slate-950 p-4 text-white shadow-sm shadow-amber-100">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/pokeball.png" alt="Pokéball" className="h-8 w-8" />
          <h1 className="hidden text-base font-bold md:block md:text-2xl">
            Pokémon App
          </h1>
        </Link>
        <Menu />
      </div>
    </header>
  );
}
