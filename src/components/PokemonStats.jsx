/**
 * Esse componente é responsável por rendereizar dados de stats de um Pokémon.
 * Ele recebe uma lista de stats e renderiza cada um em um cartão estilizado.
 * @param {{ stats: Array<{ name: string, value: number }> }} param0 - Propriedades do componente.
 * @param {Array} stats - Lista de stats do Pokémon, onde cada stat é um objeto com `name` e `value`.
 * @returns {JSX.Element}
 */
export function PokemonStats({ stats }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-slate-800 p-4 rounded-lg shadow-md w-40 flex flex-col gap-4 shrink-0 grow"
        >
          <h3 className="text-base text-amber-300 font-bold capitalize flex-1">
            {stat.name}
          </h3>
          <p className="text-3xl font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
