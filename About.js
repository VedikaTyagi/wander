import Hero from "hero";
import Navbar from "Navbar";
import AboutImg from "4.jpeg";
import Footer from "Footer";
import AboutUs from "AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
