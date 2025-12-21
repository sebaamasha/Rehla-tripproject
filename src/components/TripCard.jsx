import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function TripCard({ trip }) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useContext(FavoritesContext);

  const favorite = isFavorite(trip.id);

  function handleFavoriteClick() {
    if (favorite) {
      removeFromFavorites(trip.id);
    } else {
      addToFavorites(trip);
    }
  }

  return (
    <article className="trip-card">
      <h3 className="trip-title">{trip.title}</h3>
      <p className="trip-location">{trip.location}</p>
      <p className="trip-description">{trip.description}</p>

      <button
        onClick={handleFavoriteClick}
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        {favorite ? "Remove Favorite" : "Add to Favorites"}
      </button>
    </article>
  );
}

export default TripCard;
