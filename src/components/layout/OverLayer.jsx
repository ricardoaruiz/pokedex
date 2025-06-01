import { cn } from "../../utils";

/**
 * Esse componente é responsável por renderizar uma camada de sobreposição.
 * Ele recebe um prop `isVisible` que controla a visibilidade da camada.
 * Se `isVisible` for falso, o componente retorna null, caso contrário, renderiza
 * uma div com classes estilizadas e exibe os filhos dentro dela.
 * @param {Object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - Os elementos filhos a serem renderizados dentro da camada de sobreposição.
 * @param {boolean} props.isVisible - Indica se a camada de sobreposição deve ser exibida.
 * @returns {JSX.Element|null} - Retorna uma div estilizada ou null se não estiver visível.
 */
export function OverLayer({ children, isVisible }) {
  if (!isVisible) {
    return null;
  }
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 z-30 flex w-full items-center justify-center bg-slate-900 text-6xl text-white opacity-80",
      )}
    >
      {children}
    </div>
  );
}
