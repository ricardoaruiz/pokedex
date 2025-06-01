import { createBrowserRouter } from "react-router-dom";
import {
  PokemonDetailsPage,
  PokemonFavoritesPage,
  PokemonListPage,
} from "../pages";

/**
 * Esse é o roteador da aplicação, responsável por definir as rotas
 * e os componentes que serão renderizados para cada rota.
 * Ele utiliza o `createBrowserRouter` do React Router para criar as rotas.
 * @returns {BrowserRouter} - Retorna o roteador configurado com as rotas da aplicação.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonListPage />,
  },
  {
    path: "/:id",
    element: <PokemonDetailsPage />,
  },
  {
    path: "/favorites",
    element: <PokemonFavoritesPage />,
  },
]);
