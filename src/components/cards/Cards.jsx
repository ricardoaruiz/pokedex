import { Link } from "react-router-dom";
import { Card } from "./Card";

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
  if (!isLoading && (!data || data.length === 0)) {
    return (
      <div className="text-center text-2xl font-bold flex flex-col items-center justify-center gap-4">
        <h2>No Pokémon found.</h2>

        {showEmptyDescription && (
          <div className="text-base">
            <p>
              Remember that the filter will only search for pokemons that have
              already been loaded into the list!
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="
          container mx-auto max-w-[1150px]
          grid justify-items-center gap-10
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        "
    >
      {data.map((pokemon) => (
        <Link key={pokemon.id} to={`/${pokemon.id}`} className="w-full">
          <Card pokemon={pokemon} />
        </Link>
      ))}
    </div>
  );
}
