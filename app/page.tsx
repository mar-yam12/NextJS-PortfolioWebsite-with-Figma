

import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Projects from "./Projects/page";
import Contact from "./Contact/page"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Projects />
      <Contact />
    </div>
  );
}
