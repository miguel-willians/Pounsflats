import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
