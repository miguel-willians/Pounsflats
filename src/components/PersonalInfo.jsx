import styles from "./PersonalInfo.module.css";

function PersonalInfo() {
  return (
    <section>
      <form className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome e sobrenome</label>
          <input type="text" id="name" placeholder="Henrique Rodrigues" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" placeholder="983.724.162-55" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Número de celular</label>
          <input type="text" id="phone" placeholder="(41) 99115-2028" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="birthdate">Data de nascimento</label>
          <div className={styles.inputWithIcon}>
            <input type="date" id="birthdate" defaultValue="1991-03-04" />
            <span className={styles.icon}>📅</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="henrique@e-mail.com.br" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="**********" />
        </div>
      </form>
    </section>
  );
}

export default PersonalInfo;
