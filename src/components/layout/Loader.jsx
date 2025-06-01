import { OverLayer } from "./OverLayer";

/**
 * Componente para mostrar un loader
 * @param {Object} param0 - Propriedades do componente.
 * @param {boolean} param0.isVisible - Indica se o loader deve ser exibido.
 * @returns {JSX.Element}
 * @description Este componente exibe um loader animado com uma imagem de Pokébola girando.
 * Ele é utilizado para indicar que uma operação está em andamento, como o carregamento de dados.
 * O loader é exibido dentro de um OverLayer, que cobre toda a tela.
 * A visibilidade do loader é controlada pela propriedade `isVisible`.
 * @example
 * <Loader isVisible={true} />
 */
export function Loader({ isVisible }) {
  return (
    <OverLayer isVisible={isVisible}>
      <div className="flex items-center gap-4 text-2xl md:text-3xl">
        <img
          src="/pokeball.png"
          alt="Pokéball"
          className="h-12 w-12 animate-spin text-amber-200 md:h-20 md:w-20"
        />
        loading...
      </div>
    </OverLayer>
  );
}
