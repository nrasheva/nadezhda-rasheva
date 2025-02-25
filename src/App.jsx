import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Projects } from "./components/Pages/Projects";
import { Contacts } from "./components/Pages/Contacts";
import { Footer } from "./components/Navigation/Footer";

function App() {
  return (
    <>
  <Navigation />;
  <Home />
  <About />
  <Projects />
  <Contacts />
  <Footer />
  </>
)
}

export default App;
