import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(item) {
    const alreadyExists = favorites.find((fav) => fav.id === item.id);
    if (!alreadyExists) {
      setFavorites([...favorites, item]);
    }
  }

  function removeFromFavorites(id) {
    const newFavs = favorites.filter((fav) => fav.id !== id);
    setFavorites(newFavs);
  }

  function isFavorite(id) {
    return favorites.some((fav) => fav.id === id);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
