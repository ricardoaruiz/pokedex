import { useEffect, useState } from "react";
import { useDebounce } from "react-haiku";
import { cn } from "../utils";

/**
 * Esse componente é responsável por renderizar um campo de busca.
 * Ele recebe uma função `onSearch` que é chamada com o valor de busca
 * após um atraso de 500ms, permitindo uma busca mais eficiente.
 * @param {Object} props - As propriedades do componente.
 * @param {string} [props.className] - Classes adicionais para estilização do campo de busca.
 * @param {function} props.onSearch - Função chamada com o valor de busca após debounce.
 * @returns {JSX.Element} - Retorna um campo de entrada de texto para busca.
 */
export function SearchField({ className, onSearch, ...props }) {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (event) => setValue(event.target.value);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <input
      type="search"
      className={cn(
        "bg-slate-950 px-3 py-4 rounded-lg text-xl font-bold",
        "outline-0 focus:ring-2 focus:ring-amber-200 transition-all duration-200 shadow-xl",
        "hover:shadow-amber-200 hover:shadow-md cursor-pointer",
        className
      )}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}
