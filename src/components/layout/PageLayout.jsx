import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteTitle } from "../../routes";
import { Container } from "./Container";
import { Header } from "./Header";

/**
 * Esse componente é responsável por renderizar o layout da página.
 * Ele inclui o cabeçalho fixo e um container para o conteúdo principal.
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Os elementos filhos a serem renderizados dentro do layout.
 * @returns {JSX.Element}
 */
export function PageLayout({ children }) {
  const { pathname } = useLocation();

  /**
   *  Esse efeito é responsável por atualizar o título da página
   *  com base na rota atual. Ele utiliza a função `getRouteTitle` para obter
   *  o título correspondente à rota e define o título do documento.
   *  O título é atualizado sempre que o `pathname` muda.
   *  @returns {void}
   */
  useEffect(() => {
    const title = getRouteTitle(pathname);
    window.document.title = `Pokemon | ${title}`;
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="pt-20">
        <Container>{children}</Container>
      </main>
    </>
  );
}
