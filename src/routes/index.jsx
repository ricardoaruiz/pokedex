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
    title: "List",
    element: <PokemonListPage />,
  },
  {
    path: "/pokemon/:id",
    title: "Details",
    element: <PokemonDetailsPage />,
  },
  {
    path: "/favorites",
    title: "Favorites",
    element: <PokemonFavoritesPage />,
  },
]);

/**
 * Essa fun o recupera o titulo de uma rota com base no pathname fornecido.
 * Ela busca pelas rotas do roteador para encontrar um caminho que coincida.
 * Se o pathname coincidir diretamente com o caminho da rota ou coincidir
 * com um segmento de rota dinamica, ela retorna o titulo correspondente da rota.
 * Se nao for encontrado nenhum match, ela retorna o titulo padrao "Pokemon".
 * @param {string} pathname - O pathname a ser comparado com as rotas.
 * @returns {string} - O t tulo da rota encontrada ou o t tulo padr o "Pokemon".
 */
export function getRouteTitle(pathname) {
  const route = router.routes.find((route) => {
    return (
      pathname === route.path ||
      (route.path.includes(":") &&
        pathname.startsWith(route.path.split(":")[0]))
    );
  });
  return route ? route.title : "Pokemon";
}
