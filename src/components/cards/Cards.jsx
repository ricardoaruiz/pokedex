import { Link } from "react-router-dom";
import { Card } from "./Card";
import { CardsNotFound } from "./CardsNotFound";

/**
 * Esse componente é responsável por renderizar uma lista de cartões de Pokémon.
 * Ele recebe os dados dos Pokémons e um estado de carregamento como props.
 * Se não houver dados ou se a lista estiver vazia, exibe uma mensagem informativa.
 * @param {Object} props - As propriedades do componente.
 * @param {Array} props.data - A lista de Pokémons a serem exibidos.
 * @param {boolean} props.isLoading - Indica se os dados estão sendo carregados.
 * @returns {JSX.Element}
 */
export function Cards({ data, isLoading, showEmptyDescription = true }) {
  const showNoData = !isLoading && (!data || data.length === 0);
  if (showNoData) {
    return <CardsNotFound showEmptyDescription={showEmptyDescription} />;
  }

  return (
    <div className="container mx-auto grid max-w-[1150px] grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
      {data.map((pokemon) => (
        <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`} className="w-full">
          <Card pokemon={pokemon} />
        </Link>
      ))}
    </div>
  );
}
