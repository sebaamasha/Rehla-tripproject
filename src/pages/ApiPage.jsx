import { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function ApiPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { addToFavorites, removeFromFavorites, isFavorite } =
    useContext(FavoritesContext);

  useEffect(() => {
    setIsLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts.");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong.");
        setIsLoading(false);
      });
  }, []);

  function handleFavorite(post) {
    if (isFavorite(post.id)) {
      removeFromFavorites(post.id);
    } else {
      addToFavorites(post);
    }
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
      <h1>Stories from API</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!isLoading && !error && (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "12px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>

              <button
                onClick={() => handleFavorite(post)}
                style={{
                  marginTop: "10px",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                {isFavorite(post.id) ? "Remove Favorite" : "Add to Favorites"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiPage;
