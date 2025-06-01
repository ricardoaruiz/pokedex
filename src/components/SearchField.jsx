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

  /**
   *  Esse manipulador de eventos é responsável por atualizar o estado
   *  do campo de busca sempre que o usuário digita algo. Ele extrai o valor
   *  do evento de mudança e o define no estado `value`, que é usado para
   *  renderizar o campo de entrada.
   *  Ele é chamado sempre que o usuário altera o valor do campo de busca.
   * @param {*} event
   * @returns  {void}
   */
  const handleChange = (event) => setValue(event.target.value);

  /**
   * Esse efeito é responsável por chamar a função `onSearch` com o valor de busca
   * apos um atraso de 500ms, permitindo uma busca mais eficiente.
   */
  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <input
      type="search"
      className={cn(
        "rounded-lg bg-slate-950 px-3 py-4 text-xl font-bold",
        "shadow-xl outline-0 transition-all duration-200 focus:ring-2 focus:ring-amber-200",
        "cursor-pointer hover:shadow-md hover:shadow-amber-200",
        className,
      )}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}
