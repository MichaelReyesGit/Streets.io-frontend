import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Fighters from "./components/Fighters/Fighters";
import CreateFighter from "./components/CreateFighter/CreateFighter";
import Fighter from "./components/Fighter/Fighter";
import EditFighter from "./components/EditFighter/EditFighter";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fighters" element={<Fighters />} />
          <Route path="/create-fighter" element={<CreateFighter />} />
          <Route path="/fighters/:id" element={<Fighter />} />
          <Route path="/fighters/:id/edit" element={<EditFighter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
