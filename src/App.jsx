import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Ranks from "./components/Ranks.jsx";
import Staff from "./components/Staff.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Ranks />
        <Staff />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
