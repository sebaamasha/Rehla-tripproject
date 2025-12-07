import { useState, useEffect } from "react";

function ApiPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <div style={styles.container}>
      <h1>Stories from API</h1>
      <p>These are example posts loaded from a public API.</p>

      {isLoading && <p>Loading...</p>}

      {error && <p style={styles.error}>{error}</p>}

      {!isLoading && !error && (
        <ul style={styles.list}>
          {posts.map((post) => (
            <li key={post.id} style={styles.item}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "16px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  item: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    backgroundColor: "#f9f9f9",
  },
  error: {
    color: "red",
    marginTop: "8px",
  },
};

export default ApiPage;
