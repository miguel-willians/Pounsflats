import { useState } from "react"; // Importa o hook de estado
import { NavLink } from "react-router-dom";

import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Filters from "../components/Filters";
import RentalsList from "../components/RentalsList";
import Rental from "../components/Rental";
import Exit from "../components/Exit";

import ArrowIcon from "../assets/icons/ArrowIcon.jsx";

function Home() {
  const [showExit, setShowExit] = useState(false);

  const handleArrowClick = () => {
    setShowExit(true);
  };

  const handleExitClick = () => {
    setShowExit(false);
  };

  return (
    <>
      <Header>
        <div>
          <button
            onClick={handleArrowClick}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <ArrowIcon />
          </button>
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
      {showExit ? (
        <button
          onClick={handleExitClick}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <Exit />
        </button>
      ) : (
        <Menu />
      )}
    </>
  );
}

export default Home;
