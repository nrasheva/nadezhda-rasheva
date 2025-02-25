import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Projects } from "./components/Pages/Projects";
import { Contacts } from "./components/Pages/Contacts";
import { Footer } from "./components/Navigation/Footer";
import { useRef } from "react";

function App() {
  const contactRef = useRef(null);

  return (
    <>
  <Navigation />;
  <Home contactRef={contactRef} />
  <About />
  <Projects />
  <Contacts ref={contactRef} />
  <Footer />
  </>
)
}

export default App;
