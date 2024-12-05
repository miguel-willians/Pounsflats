import { NavLink } from "react-router-dom";

import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

import ArrowIcon from "../assets/icons/ArrowIcon.svg";
import Filters from "../components/Filters";

function Home() {
  return (
    <div>
      <Header>
        <div>
          <img src={ArrowIcon} alt="Botão retornar" />
          <NavLink to="/">+ Cadastrar Imóvel</NavLink>
        </div>
        <h1>Bem-vindo, Raphael!</h1>
      </Header>
      <Main>
        <Filters />
      </Main>
      <Menu />
    </div>
  );
}

export default Home;
