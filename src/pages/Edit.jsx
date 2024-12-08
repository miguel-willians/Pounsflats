import { NavLink } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Input from "../components/Input";
import Button from "../components/Button";

import styles from "./Edit.module.css";

import ArrowIcon from "../assets/component_icons/ArrowIcon";
import ChatIcon from "../assets/menu_icons/ChatIcon";
import Confirm from "../components/Confirm";

function Edit() {
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmingCancel, setIsConfirmingCancel] = useState(false);

  const [formData, setFormData] = useState({
    name: "Rafael Rodrigues",
    cpf: "983.724.162-55",
    phone: "(41) 99115-2028",
    email: "henrique@e-mail.com.br",
    date: ["2023-04-27", "2023-04-29"],
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleCancelEdit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsConfirmingCancel(true);
  };

  const handleCancelConfirmation = () => {
    setIsConfirmingCancel(false);
  };

  return (
    <div>
      <Header>
        <NavLink to="/reservations">
          <ArrowIcon />
        </NavLink>
        <h1>Nova Reserva</h1>
      </Header>
      <Main>
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          disabled={!isEditing}
          label={true}
          labelFor="name"
          labelName="Nome e sobrenome"
        />
        <Input
          type="text"
          id="cpf"
          value={formData.cpf}
          disabled={true}
          label={true}
          labelFor="cpf"
          labelName="CPF"
        />
        <Input
          type="text"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          disabled={!isEditing}
          label={true}
          labelFor="phone"
          labelName="Número de celular"
        />
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          disabled={!isEditing}
          label={true}
          labelFor="email"
          labelName="E-mail"
        />
        <h2>Período</h2>
        <Input
          type="date"
          id="check-in"
          value={formData.date[0]}
          onChange={handleInputChange}
          disabled={!isEditing}
          label={true}
          labelFor="check-in"
          labelName="Data do check-in"
        />
        <Input
          type="date"
          id="check-out"
          value={formData.date[1]}
          onChange={handleInputChange}
          disabled={!isEditing}
          label={true}
          labelFor="check-out"
          labelName="Data do check-out"
        />
      </Main>

      <div>
        <div className={styles.edit}>
          {!isConfirmingCancel &&
            (!isEditing ? (
              <>
                <Button onClick={handleEdit} type="default">
                  Editar Reserva
                </Button>
                <Button type="primary">
                  <ChatIcon />
                  Falar com o hóspede
                </Button>
                <Button onClick={handleCancelClick} type="cancel">
                  Cancelar Reserva
                </Button>
              </>
            ) : (
              <>
                <NavLink to="sucess">
                  <Button type="default">Salvar edição</Button>
                </NavLink>
                <Button onClick={handleCancelEdit} type="secondary">
                  Cancelar
                </Button>
              </>
            ))}
        </div>

        {isConfirmingCancel && (
          <Confirm
            question={"Deseja cancelar a reserva?"}
            option1={"Sim, cancelar agora"}
            link1={"/reservations/cancel/sucess"}
            option2={"Não quero cancelar"}
            onContinue={handleCancelConfirmation}
          />
        )}
      </div>
    </div>
  );
}

export default Edit;
