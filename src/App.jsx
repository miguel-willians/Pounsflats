import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Profile from "./pages/Profile";
import Historic from "./pages/Historic";
import Chat from "./pages/Chat";
import NewReservation from "./pages/NewReservation";
import Sucess from "./pages/Sucess";
import Edit from "./pages/Edit";
import EditSucess from "./pages/EditSucess";
import CancelSucess from "./pages/CancelSucess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="reservations/new" element={<NewReservation />} />
        <Route path="reservations/edit" element={<Edit />} />
        <Route path="reservations/new/sucess" element={<Sucess />} />
        <Route path="reservations/edit/sucess" element={<EditSucess />} />
        <Route path="reservations/cancel/sucess" element={<CancelSucess />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chat" element={<Chat />} />
        <Route path="historic" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
