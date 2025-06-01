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

  const addToFavorites = (pokemon) => {
    setFavorites((prevFavorites) => [...prevFavorites, pokemon]);
  };

  const removeFromFavorites = (pokemonId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((pokemon) => pokemon.id !== pokemonId)
    );
  };

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
      "useFavoriteContext must be used within a FavoriteProvider"
    );
  }
  return context;
};
