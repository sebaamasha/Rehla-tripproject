

function TripCard({ trip }) {
  return (
    <div style={styles.card}>
      <h2>{trip.title}</h2>
      <h4>{trip.location}</h4>
      <p>{trip.description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "12px",
    backgroundColor: "#f9f9f9",
  },
};

export default TripCard;
