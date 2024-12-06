import Button from "./Button";
import styles from "./PersonalInfo.module.css";

function PersonalInfo() {
  return (
    <section>
      <form>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            defaultValue="Henrique Rodrigues"
            disabled
          />
          <label htmlFor="name">Nome e sobrenome</label>
        </div>
        <div className={styles.formGroup}>
          <input type="text" id="cpf" defaultValue="983.724.162-55" disabled />
          <label htmlFor="cpf">CPF</label>
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="phone"
            defaultValue="(41) 99115-2028"
            disabled
          />
          <label htmlFor="phone">Número de celular</label>
        </div>
        <div className={styles.formGroup}>
          <input
            type="date"
            id="birthdate"
            defaultValue="1991-03-04"
            disabled
          />
          <label htmlFor="birthdate">Data de nascimento</label>
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            defaultValue="henrique@e-mail.com.br"
            disabled
          />
          <label htmlFor="email">E-mail</label>
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            id="password"
            defaultValue="**********"
            disabled
          />
          <label htmlFor="password">Senha</label>
        </div>
        <div className={styles.edit}>
          <Button type="default">Editar Informações</Button>
        </div>
      </form>
    </section>
  );
}

export default PersonalInfo;
