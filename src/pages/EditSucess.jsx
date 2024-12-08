import { NavLink } from "react-router-dom";

import Button from "../components/Button";
import Main from "../components/Main";

import style from "./Sucess.module.css";

// import ConfirmIcon from ;

function EditSucess() {
  return (
    <>
      <Main>
        <div className={style.box}>
          <img src="icons/ConfirmIcon.svg" alt="Confirm Icon" />
          <p>Sua reserva foi editada com sucesso.</p>
          <p>Seu hóspede será notificado por e-mail e sms.</p>
        </div>
      </Main>
      <div className={style.btns}>
        <NavLink to={"/reservations"}>
          <Button type={"default"}>Tamo junto</Button>
        </NavLink>
      </div>
    </>
  );
}

export default EditSucess;
