/**
 * Esse componente é responsável por renderizar uma tag estilizada.
 * Ele recebe um prop `children` que representa o conteúdo a ser exibido dentro da tag.
 * A tag é estilizada com classes do Tailwind CSS para ter um fundo escuro e bordas arredondadas.
 * @param {Object} param0 - Propriedades do componente.
 * @param {React.ReactNode} param0.children - O conteúdo a ser exibido dentro da tag.
 * @returns {JSX.Element} - Retorna uma div estilizada com o conteúdo fornecido.
 */
export function Tag({ children }) {
  return <div className="p-1 bg-slate-800 rounded">{children}</div>;
}
