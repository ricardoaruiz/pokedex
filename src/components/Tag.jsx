import { cn } from "../utils";

/**
 * Esse componente é responsável por renderizar uma tag estilizada.
 * Ele aceita um tamanho opcional e renderiza o conteúdo dentro de uma div com classes CSS apropriadas.
 * @param {Object} param0 - Propriedades do componente.
 * @param {React.ReactNode} param0.children - O conteúdo a ser exibido dentro da tag.
 * @param {string} [param0.size] - O tamanho da tag, que pode ser 'sm', 'md' ou 'lg'.
 * @returns {JSX.Element} - Um elemento <div> estilizado com o conteúdo fornecido.
 * @example
 * // Exemplo de uso:
 * <Tag size="lg">This is a large tag</Tag>
 * <Tag size="md">This is a medium tag</Tag>
 * <Tag size="sm">This is a small tag</Tag>
 */
export function Tag({ children, size }) {
  const internalSize = size || "md"; // Default size is 'md' if not provided
  return (
    <div
      className={cn("rounded bg-slate-800", {
        "p-1": internalSize === "sm",
        "p-2": internalSize === "md",
        "p-3": internalSize === "lg",
      })}
    >
      {children}
    </div>
  );
}
