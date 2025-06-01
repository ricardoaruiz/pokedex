import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Esse componente é responsável por renderizar um botão de voltar.
 * Ele utiliza o componente Link do React Router para navegar para uma rota específica.
 * O botão exibe um ícone de seta para a esquerda e um texto opcional.
 * Se nenhum texto for fornecido, o texto padrão será "Back".
 * @param {Object} param0 - Propriedades do componente.
 * @param {React.ReactNode} [param0.children] - Texto ou conteúdo a ser exibido dentro do botão.
 * @param {string} param0.to - A rota para a qual o botão deve navegar.
 * @returns {JSX.Element}
 */
export function BackButton({ children, to }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 text-lg text-slate-200 transition-colors hover:text-amber-200"
    >
      <ArrowLeft />
      {children ?? "Back"}
    </Link>
  );
}
