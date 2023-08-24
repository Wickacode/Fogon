import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Chef from "./components/Chef";
import Locaux from "./components/Locaux";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Chef />
      <Locaux />

    </div>
  );
}

export default App;
