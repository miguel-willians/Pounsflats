/* eslint-disable react/prop-types */

import styles from "./ReservItem.module.css";

function ReservItem({ title, name, date, cpf, mobile, email, comp }) {
  return (
    <div className={styles.box}>
      <h3>{title}</h3>
      <div>
        <p>Nome do hóspede:</p>
        <p>{name}</p>
      </div>
      <div>
        <p>Período:</p>
        <p>{date}</p>
      </div>
      <div>
        <p>CPF</p>
        <p>{cpf}</p>
      </div>
      <div>
        <p>Celular:</p>
        <p>{mobile}</p>
      </div>
      <div>
        <p>E-mail:</p>
        <p>{email}</p>
      </div>
      <div>
        <p>Locado por:</p>
        <div className={styles.tag}>{comp}</div>
      </div>
    </div>
  );
}

export default ReservItem;
