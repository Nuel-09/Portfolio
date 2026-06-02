import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Featured from "./components/Featured.jsx";
import Reflection from "./components/Reflection.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export const sections = [
  { id: "profile", label: "Profile" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "featured", label: "Featured" },
  { id: "reflection", label: "Reflection" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Featured />
        <Reflection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
