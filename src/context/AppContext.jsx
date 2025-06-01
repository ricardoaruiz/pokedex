import { FavoriteProvider } from "./FavoriteContext";
import { ListProvider } from "./ListContext";

/**
 *  Esse componente é responsável por fornecer o contexto da aplicação.
 *  Ele envolve os componentes filhos com os provedores de contexto necessários,
 *  como o ListProvider e o FavoriteProvider, para que os dados e funções
 *  possam ser acessados em toda a aplicação.
 * @param {Object} param0 - Propriedades do componente.
 * @param {React.ReactNode} param0.children - Os elementos filhos a serem renderizados dentro do contexto.
 * @description Fornece o contexto da aplicação, incluindo listas e favoritos.
 * @example
 * // Exemplo de uso:
 * <AppContext>
 *   <YourComponent />
 * </AppContext>
 * @returns {JSX.Element} - Retorna o provedor de contexto com os valores necessários para os componentes filhos.
 */
export function AppContext({ children }) {
  return (
    <ListProvider>
      <FavoriteProvider>{children}</FavoriteProvider>
    </ListProvider>
  );
}
