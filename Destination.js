import Italy from "Italy.jpg";
import Italy2 from "Italy2.jpeg";
import Rome1 from "rome1.jpeg";
import Rome2 from "rome2.jpeg";
import SA1 from "SA1.jpg";
import SA2 from "SA2.jpg";
import DestinationData from "DestinationData";
import "DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to explore within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Genoa, Italy"
        text="Genoa (Genova) is a port city and the capital of northwest Italy's Liguria region. It's known for its central role in maritime trade over many centuries. In the old town stands the Romanesque Cathedral of San Lorenzo, with its black-and-white-striped facade and frescoed interior. Narrow lanes open onto monumental squares like Piazza de Ferrari, site of an iconic bronze fountain and Teatro Carlo Felice opera house."
        img1={Italy}
        img2={Italy2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Rome"
        text="Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. It is famous for Colosseum.
        Trevi Fountain.
        The Pantheon.
        Roman Forum.
        Piazza Navona.
        Spanish Steps.
        Vatican Museums.
        St Peter's Basilica. "
        img1={Rome1}
        img2={Rome2}
      />

      <DestinationData
        className="first-des"
        heading="Durban, South Africa"
        text="Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. It is famous for Colosseum.
        Trevi Fountain.
        The Pantheon.
        Roman Forum.
        Piazza Navona.
        Spanish Steps.
        Vatican Museums.
        St Peter's Basilica. "
        img1={SA1}
        img2={SA2}
      />
    </div>
  );
};

export default Destination;
