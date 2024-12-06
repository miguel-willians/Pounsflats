import { NavLink } from "react-router-dom";

import Menu from "../components/Menu";
import Main from "../components/Main";
import Header from "../components/Header";

import ArrowIcon from "../assets/icons/ArrowIcon";
import Message from "../components/Message";

function Reservations() {
  return (
    <div>
      <Header>
        <div>
          <NavLink to="/">
            <ArrowIcon />
          </NavLink>
          <NavLink to="/">+ Nova reserva</NavLink>
        </div>
        <h1>Reservas</h1>
      </Header>
      <Main>
        <Message
          title="Sincronização Booking.com"
          desc="Você pode sincronizar o seu calendário do Booking.com e gerir seus imóveis em um só lugar. Que tal fazer isso agora? Clique neste banner e sincronize!"
        />
        <Message
          title="Sincronização AirBNB"
          desc="Você pode sincronizar o seu calendário do AirBNB e gerir seus imóveis em um só lugar. Que tal fazer isso agora? Clique neste banner e sincronize!"
        />
        <h2>Reservas do mês</h2>
      </Main>
      <Menu />
    </div>
  );
}

export default Reservations;
