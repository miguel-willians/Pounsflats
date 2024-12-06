/* eslint-disable react/prop-types */
import Button from "./Button";

import styles from "./Exit.module.css";

import Indicator from "../assets/icons/Indicator.svg";

function Exit({ onContinue }) {
  // Recebe a função onContinue como prop
  return (
    <div className={styles.exitBox}>
      <img
        src={Indicator}
        alt="Indicator"
        onClick={onContinue} // Adiciona o clique no Indicator para voltar ao Menu
      />
      <div>
        <p>Você realmente deseja sair do Poundsflats?</p>
        <Button type="default">Sim, quero sair agora!</Button>
        <Button type="secondary" onClick={onContinue}>
          Não, quero continuar
        </Button>{" "}
        {/* Passa a função para o botão */}
      </div>
    </div>
  );
}

export default Exit;
