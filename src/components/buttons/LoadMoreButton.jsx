import { cn } from "../../utils";
/**
 * Esse componente é responsável por renderizar um botão de "Carregar mais pokémons".
 * Ele recebe propriedades para controlar o estado de carregamento e visibilidade do botão.
 * Se o botão estiver visível, ele renderiza um botão estilizado que, quando clicado,
 * carrega mais Pokémons. Se estiver carregando, o texto do botão muda para "Carregando...".
 * @param {Object} props - As propriedades do componente.
 * @param {boolean} props.isLoading - Indica se os dados estão sendo carregados.
 * @param {boolean} props.visible - Indica se o botão deve ser exibido.
 * @param {string} [props.className] - Classes adicionais para estilização do botão.
 * @param {Object} [props] - Outras propriedades que serão passadas para o botão.
 * @returns {JSX.Element|null} - Retorna um botão estilizado ou null se não estiver visível.
 */
export function LoadMoreButton({ isLoading, visible, className, ...props }) {
  if (!visible) return null;
  return (
    <button
      disabled={isLoading}
      className={cn(
        "rounded-lg bg-slate-950 px-6 py-3 text-xl font-bold",
        "shadow-xl outline-0 transition-all duration-200 focus:ring-2 focus:ring-amber-200",
        "cursor-pointer hover:shadow-md hover:shadow-amber-200",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {isLoading ? "Loading..." : "Load more Pokémons"}
    </button>
  );
}
