/* eslint-disable react/prop-types */
import Button from "./Button";

import styles from "./Exit.module.css";

import Indicator from "../assets/icons/Indicator.svg";

function Exit({ onContinue }) {
  return (
    <div className={styles.exitBox}>
      <img src={Indicator} alt="Indicator" onClick={onContinue} />
      <div>
        <p>Você realmente deseja sair do Poundsflats?</p>
        <Button type="default">Sim, quero sair agora!</Button>
        <Button type="secondary" onClick={onContinue}>
          Não, quero continuar
        </Button>
      </div>
    </div>
  );
}

export default Exit;
