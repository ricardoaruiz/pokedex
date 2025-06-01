/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const ListContext = createContext();

/**
 * Esse e o contexto responsável por gerenciar o estado da lista de dados.
 * Ele fornece os dados, funções para atualizar os dados, o offset e a próxima página.
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Os elementos filhos a serem renderizados dentro do provedor de contexto.
 * @returns {JSX.Element} - Retorna o provedor de contexto com os valores necessários para os componentes filhos.
 */
export const ListProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [next, setNext] = useState(null);

  return (
    <ListContext.Provider
      value={{
        data,
        setData,
        filteredData,
        setFilteredData,
        offset,
        setOffset,
        next,
        setNext,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useListContext must be used within a ListProvider");
  }
  return context;
};
