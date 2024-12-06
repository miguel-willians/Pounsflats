import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Profile from "./pages/Profile";
import Historic from "./pages/Historic";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chat" element={<Chat />} />
        <Route path="historic" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
