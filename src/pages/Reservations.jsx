import { NavLink } from "react-router-dom";

import Menu from "../components/Menu";
import Main from "../components/Main";
import Header from "../components/Header";

import ArrowIcon from "../assets/icons/ArrowIcon";
import Message from "../components/Message";
import ReservItem from "../components/ReservItem";
import Calendar from "../components/Calendar";

function Reservations() {
  return (
    <div>
      <Header>
        <div>
          <NavLink to="/">
            <ArrowIcon />
          </NavLink>
          <NavLink to="new">+ Nova reserva</NavLink>
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
        <Calendar />
        <h2>Reservas do mês</h2>
        <ReservItem
          title="Poundsflats Aquário"
          name="Raphael Viana"
          date="27/04/2023 - 30/04/2023"
          cpf="983.***.***-49"
          mobile="(41) 99115-2028"
          email="raphamedina20@gmail.com"
          comp="Booking.com"
        />
        <ReservItem
          title="Poundsflats Aquário"
          name="Raphael Viana"
          date="27/04/2023 - 30/04/2023"
          cpf="983.***.***-49"
          mobile="(41) 99115-2028"
          email="raphamedina20@gmail.com"
          comp="Poundsflats"
        />
      </Main>
      <Menu />
    </div>
  );
}

export default Reservations;
