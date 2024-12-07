import { useState } from "react";

import Button from "./Button";

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
    console.log("Dados salvos:", formData);
    setIsEditing(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  console.log(isEditing);

  return (
    <section>
      <form>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <label htmlFor="name">Nome e sobrenome</label>
        </div>

        <div className={styles.formGroup}>
          <input type="text" id="cpf" value={formData.cpf} disabled />
          <label htmlFor="cpf">CPF</label>
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <label htmlFor="phone">Número de celular</label>
        </div>

        <div className={styles.formGroup}>
          <input
            type="date"
            id="birthdate"
            value={formData.birthdate}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <label htmlFor="birthdate">Data de nascimento</label>
        </div>

        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <label htmlFor="email">E-mail</label>
        </div>

        <div className={styles.formGroup}>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <label htmlFor="password">Senha</label>
        </div>

        <div className={styles.edit}>
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
        </div>
      </form>
    </section>
  );
}

export default PersonalInfo;
