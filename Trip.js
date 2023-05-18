import "TripStyles.css";
import TripData from "TripData";
import Trip1 from "France.jpg";
import Trip2 from "Mauritius.jpg";
import Trip3 from "Malaysia.png";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in France"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. "
        />
        <TripData
          image={Trip2}
          heading="Trip in Mauricius"
          text="Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests, waterfalls, hiking trails and wildlife like the flying fox."
        />
        <TripData
          image={Trip3}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences.  "
        />
      </div>
    </div>
  );
}

export default Trip;
