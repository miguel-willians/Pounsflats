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
    setShowExit(true); // Exibe o Exit
  };

  // const handleExitClick = () => {
  //   setShowExit(false); // Exibe o Menu
  // };

  // Função para lidar com o clique em "Não, quero continuar"
  const handleContinueClick = () => {
    setShowExit(false); // Exibe o Menu
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
        <Exit
          onContinue={handleContinueClick} // Passa a função de continuar
        />
      ) : (
        <Menu />
      )}
    </>
  );
}

export default Home;
