import Hero from "hero";
import Navbar from "Navbar";
import ContactImg from "1.jpg";
import Footer from "Footer";
import ContactForm from "ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
