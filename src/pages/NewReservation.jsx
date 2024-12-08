import { NavLink } from "react-router-dom";

import Header from "../components/Header";
import Input from "../components/Input";
import Main from "../components/Main";
import Button from "../components/Button";

import styles from "./NewReservation.module.css";

import ArrowIcon from "/src/assets/icons/ArrowIcon";
import CheckInput from "../components/CheckInput";

function NewReservation() {
  return (
    <div>
      <Header>
        <NavLink to="/reservations">
          <ArrowIcon />
        </NavLink>
        <h1>Nova Reserva</h1>
      </Header>
      <Main>
        <form className={styles.reservForm}>
          <Input
            placeholder={"Nome do hóspede"}
            type={"text"}
            className={"noLabelInp"}
          />
          <Input placeholder={"CPF"} type={"text"} className={"noLabelInp"} />
          <Input
            placeholder={"Número de telefone"}
            type={"phone"}
            className={"noLabelInp"}
          />
          <Input
            placeholder={"E-mail"}
            type={"text"}
            className={"noLabelInp"}
          />

          <h2>Período</h2>

          <Input
            placeholder={"Data do check-in"}
            type={"date"}
            className={"noLabelInp"}
          />
          <Input
            placeholder={"Data do check-out"}
            type={"date"}
            className={"noLabelInp"}
          />

          <h2>Apartamentos disponíveis</h2>

          <CheckInput
            checked={true}
            title={"Apartamento 01"}
            location={"Santos, SP"}
            avgReview={4.5}
            perDay={"R$ 197"}
          />

          <CheckInput
            title={"Apartamento 02"}
            location={"Santos, SP"}
            avgReview={4.5}
            perDay={"R$ 197"}
          />
          <CheckInput
            title={"Apartamento 03"}
            location={"Santos, SP"}
            avgReview={4.5}
            perDay={"R$ 197"}
          />
        </form>

        <NavLink to="sucess">
          <Button type={"default"}>Confirmar Reserva</Button>
        </NavLink>
        <NavLink to="/reservations">
          <Button type={"secondary"}>Cancelar</Button>
        </NavLink>
      </Main>
    </div>
  );
}

export default NewReservation;
