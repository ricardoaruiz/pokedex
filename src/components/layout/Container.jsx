/**
 * Esse componente é responsável por delimitar a área de conteúdo da aplicação.
 * Ele aplica um espaçamento interno e centraliza os elementos filhos.
 * @param {React.ReactNode} param0.children - Os elementos filhos a serem renderizados dentro do container.
 * @returns  {JSX.Element}
 */
export function Container({ children }) {
  return (
    <div className="relative px-4 py-5 flex flex-col items-center gap-15">
      {children}
    </div>
  );
}
