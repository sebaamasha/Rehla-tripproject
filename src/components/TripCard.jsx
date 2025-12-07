
function TripCard({ trip }) {
  return (
    <article className="trip-card">
      <h3 className="trip-title">{trip.title}</h3>
      <p className="trip-location">{trip.location}</p>
      <p className="trip-description">{trip.description}</p>
    </article>
  );
}

export default TripCard;
