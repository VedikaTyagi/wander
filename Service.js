import Hero from "hero";
import Navbar from "Navbar";
import AboutImg from "4.jpeg";
import Footer from "Footer";
import Trip from "Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
