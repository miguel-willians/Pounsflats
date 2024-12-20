import { useState } from "react";

import Button from "./Button";
import Input from "./Input";

import styles from "./PersonalInfo.module.css";

function PersonalInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Rafael Rodrigues",
    cpf: "983.724.162-55",
    phone: "(41) 99115-2028",
    birthdate: "1991-03-04",
    email: "henrique@e-mail.com.br",
    password: "**********",
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

  console.log(isEditing);

  return (
    <section>
      <form className={styles.personalForm}>
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
          type="date"
          id="birthdate"
          value={formData.birthdate}
          onChange={handleInputChange}
          disabled={!isEditing}
          label={true}
          labelFor="birthdate"
          labelName="Data de nascimento"
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

        <Input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          disabled={!isEditing}
          label={true}
          labelFor="password"
          labelName="Senha"
        />

        {!isEditing ? (
          <Button onClick={handleEdit} type="default">
            Editar Informações
          </Button>
        ) : (
          <>
            <Button onClick={handleSave} type="default">
              Salvar
            </Button>
            <Button onClick={handleCancel} type="secondary">
              Cancelar
            </Button>
          </>
        )}
      </form>
    </section>
  );
}

export default PersonalInfo;
