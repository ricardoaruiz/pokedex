/**
 * Esse componente é responsável por rendereizar dados de stats de um Pokémon.
 * Ele recebe uma lista de stats e renderiza cada um em um cartão estilizado.
 * @param {{ stats: Array<{ name: string, value: number }> }} param0 - Propriedades do componente.
 * @param {Array} stats - Lista de stats do Pokémon, onde cada stat é um objeto com `name` e `value`.
 * @returns {JSX.Element}
 * @example
 * // Exemplo de uso:
 * const stats = [
 *   { name: "hp", value: 45 },
 *   { name: "attack", value: 49 },
 *   { name: "defense", value: 49 },
 *   { name: "special-attack", value: 65 },
 *   { name: "special-defense", value: 65 },
 *   { name: "speed", value: 45 },
 * ];
 * <PokemonStats stats={stats} />
 */
export function PokemonStats({ stats }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex w-40 shrink-0 grow flex-col gap-4 rounded-lg bg-slate-800 p-4 shadow-md"
        >
          <h3 className="flex-1 text-base font-bold text-amber-300 capitalize">
            {stat.name}
          </h3>
          <p className="text-3xl font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
