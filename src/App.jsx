import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route index element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
