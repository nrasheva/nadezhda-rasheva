import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Projects } from "./components/Pages/Projects";

function App() {
  return (
    <>
  <Navigation />;
  <Home />
  <About />
  <Projects />
  </>
)
}

export default App;
