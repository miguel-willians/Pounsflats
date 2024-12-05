import { NavLink } from "react-router-dom";

import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import ArrowIcon from "../assets/icons/ArrowIcon.jsx";
import Filters from "../components/Filters";
import RentalsList from "../components/RentalsList";
import Rental from "../components/Rental";

function Home() {
  return (
    <>
      <Header>
        <div>
          <ArrowIcon />
          <NavLink to="/">+ Cadastrar Imóvel</NavLink>
        </div>
        <h1>Bem-vindo, Raphael!</h1>
      </Header>
      <Main>
        <Filters />
        <RentalsList>
          <Rental />
        </RentalsList>
      </Main>
      <Menu />
    </>
  );
}

export default Home;
