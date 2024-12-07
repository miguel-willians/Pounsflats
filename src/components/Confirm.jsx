/* eslint-disable react/prop-types */
import Button from "./Button";

import styles from "./Confirm.module.css";

import Indicator from "../assets/icons/Indicator.svg";
import { NavLink } from "react-router-dom";

function Confirm({ onContinue, question, option1, option2, link1 }) {
  return (
    <div className={styles.exitBox}>
      <img src={Indicator} alt="Indicator" onClick={onContinue} />
      <div>
        <p>{question}</p>
        <NavLink to={link1}>
          <Button type="default">{option1}</Button>
        </NavLink>
        <Button type="secondary" onClick={onContinue}>
          {option2}
        </Button>
      </div>
    </div>
  );
}

export default Confirm;

// import Button from "./Button";

// import styles from "./Exit.module.css";

// import Indicator from "../assets/icons/Indicator.svg";

// function Exit({ onContinue }) {
//   return (
//     <div className={styles.exitBox}>
//       <img src={Indicator} alt="Indicator" onClick={onContinue} />
//       <div>
//         <p>Você realmente deseja sair do Poundsflats?</p>
//         <Button type="default">Sim, quero sair agora!</Button>
//         <Button type="secondary" onClick={onContinue}>
//           Não, quero continuar
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Exit;
