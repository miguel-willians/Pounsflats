import { NavLink } from "react-router-dom";

import Button from "../components/Button";
import Main from "../components/Main";

import style from "./Sucess.module.css";

import ConfirmIcon from "../assets/icons/ConfirmIcon.svg";

function Sucess() {
  return (
    <>
      <Main>
        <div className={style.box}>
          <img src={ConfirmIcon} alt="Confirm Icon" />
          <p>Maravilha! Sua reserva foi confirmada com sucesso.</p>
          <p>Seu hóspede será notificado por e-mail e sms.</p>
          <p>Você cadastrar outra reserva ou finalizar por hora.</p>
        </div>
      </Main>
      <div className={style.btns}>
        <NavLink to={"/reservations/new"}>
          <Button type={"default"}>Salvar e cadastrar outra</Button>
        </NavLink>
        <NavLink to={"/reservations"}>
          <Button type={"primary"}>Finalizar</Button>
        </NavLink>
      </div>
    </>
  );
}

export default Sucess;
