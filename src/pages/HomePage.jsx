import { useState } from "react";
import TripCard from "../components/TripCard";

function HomePage() {
  const [trips, setTrip] = useState([
    {
      id: 1,
      title: "Hiking in the Alps",
      location: "Switzerland",
      description: "Amazing views, fresh air, and unforgettable moments.",
    },
    {
      id: 2,
      title: "Beach Day in Tel Aviv",
      location: "Israel",
      description: "Sunny day, blue water, and great vibes.",
    },
    {
      id: 3,
      title: "Street Food Tour",
      location: "Bangkok",
      description: "Tasted unique dishes and met lovely people.",
    },
  ]);

  return (
    <div>
      <h1>Travel Stories</h1>
      <p>Explore experiences shared by travelers.</p>

      <div>
        {trips.map((trip) => (
          < TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
