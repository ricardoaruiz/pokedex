/**
 * Esse componente é responsável por renderizar o título da página.
 * Ele exibe o texto fornecido como filho dentro de um elemento <h1>
 * com estilos específicos para centralização e tamanho da fonte.
 * @param {Object} param0 - Propriedades do componente.
 * @param {React.ReactNode} param0.children - O texto ou elementos a serem renderizados como título.
 * @returns {JSX.Element} - Um elemento <h1> estilizado com o texto fornecido.
 */
export function PageTitle({ children }) {
  return (
    <h1 className="text-center text-3xl/relaxed font-bold md:text-5xl/relaxed">
      {children}
    </h1>
  );
}
