import ArrowIcon from "../assets/icons/ArrowIcon.svg";
import Button from "./Button";

function Header() {
  return (
    <header>
      <img src={ArrowIcon} alt="Botão retornar" />
      <Button onClick={""}>+ Cadastrar Imóvel</Button>
    </header>
  );
}

export default Header;
