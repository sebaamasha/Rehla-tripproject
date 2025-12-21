import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function FavoritesPage() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
      <h1>My Favorites</h1>

      {favorites.length === 0 && <p>No favorites yet.</p>}

      {favorites.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
          {favorites.map((item) => (
            <li
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "12px",
                backgroundColor: "#fff",
              }}
            >
              <h3>{item.title || "No title"}</h3>
              <p>{item.location}</p>
              <p>{item.description || item.body}</p>

              <button
                onClick={() => removeFromFavorites(item.id)}
                style={{
                  marginTop: "10px",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;
