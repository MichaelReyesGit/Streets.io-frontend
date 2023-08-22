import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Fighters from "./components/Fighters/Fighters";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fighters" element={<Fighters />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
