/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

/**
 * Esse e o contexto responsável por gerenciar o estado dos Pokémons favoritos.
 * Ele fornece os dados, funções para atualizar os dados e verificar se um Pokémon é favorito.
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Os elementos filhos a serem renderizados dentro do provedor de contexto.
 * @returns {JSX.Element} - Retorna o provedor de contexto com os valores necessários para os componentes filhos.
 */
export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  /**
   * Essa função adiciona um Pokémon à lista de favoritos.
   * Ela atualiza o estado dos favoritos, adicionando o Pokémon fornecido.
   * Se o Pokémon já estiver na lista, ele não será adicionado novamente.
   * @function addToFavorites
   * @description Adiciona um Pokémon à lista de favoritos.
   * @example
   * // Exemplo de uso:
   * addToFavorites({ id: 1, name: 'Pikachu' });
   * @param {*} pokemon
   */
  const addToFavorites = (pokemon) => {
    setFavorites((prevFavorites) => [...prevFavorites, pokemon]);
  };

  /**
   *  Essa função remove um Pokémon da lista de favoritos.
   *  Ela atualiza o estado dos favoritos, filtrando o Pokémon com o ID fornecido.
   *  Se o Pokémon não estiver na lista, nada acontece.
   * @function removeFromFavorites
   * @description Remove um Pokémon da lista de favoritos.
   * @example
   * // Exemplo de uso:
   * removeFromFavorites(1); // Remove o Pokémon com ID 1
   * @param {*} pokemonId
   */
  const removeFromFavorites = (pokemonId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((pokemon) => pokemon.id !== pokemonId),
    );
  };

  /**
   *  Essa função verifica se um Pokémon está na lista de favoritos.
   *  Ela retorna um valor booleano indicando se o Pokémon com o ID fornecido está na lista.
   * @function isFavorite
   * @description Verifica se um Pokémon é favorito.
   * @example
   * // Exemplo de uso:
   * isFavorite(1); // Retorna true se o Pokémon com ID 1 for favorito, caso contrário, false
   * @param {*} pokemonId
   * @returns {boolean} - Retorna true se o Pokémon for favorito, caso contrário, false.
   */
  const isFavorite = (pokemonId) => {
    return favorites.some((pokemon) => pokemon.id === pokemonId);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error(
      "useFavoriteContext must be used within a FavoriteProvider",
    );
  }
  return context;
};
