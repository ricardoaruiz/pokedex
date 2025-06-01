import { Tag } from "../Tag";

/**
 * Esse componente é responsável por renderizar os pderes de um Pokémon.
 * @param {*} param0
 * @returns
 */
export function PokemonTypes({ types }) {
  return (
    <ul className="flex gap-2">
      {types.map((type) => (
        <li key={type}>
          <Tag>{type}</Tag>
        </li>
      ))}
    </ul>
  );
}
