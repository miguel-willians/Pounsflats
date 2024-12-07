import { NavLink } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Input from "../components/Input";
import Button from "../components/Button";

import styles from "./Edit.module.css";

import ArrowIcon from "../assets/icons/ArrowIcon";
import ChatIcon from "../assets/icons/menu_icons/ChatIcon";

function Edit() {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "Rafael Rodrigues",
    cpf: "983.724.162-55",
    phone: "(41) 99115-2028",
    email: "henrique@e-mail.com.br",
    date: ["27/04/2023", "29/04/2023"],
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

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsEditing(false);
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
          id="birthdate"
          value={formData.date[0]}
          onChange={handleInputChange}
          disabled={!isEditing}
          label={true}
          labelFor="birthdate"
          labelName="Data de nascimento"
        />
        <Input
          type="date"
          id="birthdate"
          value={formData.date[1]}
          onChange={handleInputChange}
          disabled={!isEditing}
          label={true}
          labelFor="birthdate"
          labelName="Data de nascimento"
        />
      </Main>

      <div className={styles.edit}>
        {!isEditing ? (
          <>
            <Button onClick={handleEdit} type="default">
              Editar Reserva
            </Button>
            <Button onClick={handleEdit} type="primary">
              <ChatIcon />
              Falar com o hóspede
            </Button>
            <Button onClick={handleEdit} type="cancel">
              Cancelar Reserva
            </Button>
          </>
        ) : (
          <>
            <Button onClick={handleSave} type="default">
              Salvar edição
            </Button>
            <Button onClick={handleCancel} type="secondary">
              Cancelar
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Edit;
