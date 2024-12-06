import Button from "./Button";

import styles from "./Exit.module.css";

import Indicator from "../assets/icons/Indicator.svg";

function Exit() {
  return (
    <div className={styles.exitBox}>
      <img src={Indicator} alt="Indicator" />
      <div>
        <p>Você realmente deseja sair do Poundsflats?</p>
        <Button type="default">Sim, quero sair agora!</Button>
        <Button type="secondary">Não, quero continuar</Button>
      </div>
    </div>
  );
}

export default Exit;
