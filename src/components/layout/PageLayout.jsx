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
  return (
    <>
      <Header />
      <main className="pt-20">
        <Container>{children}</Container>
      </main>
    </>
  );
}
