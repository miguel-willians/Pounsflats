import Menu from "../components/Menu";
import Main from "../components/Main";
import Header from "../components/Header";

import ArrowIcon from "../assets/icons/ArrowIcon";

function Profile() {
  return (
    <>
      <Header>
        <ArrowIcon />
        <h1>Meu perfil</h1>
      </Header>
      <Main></Main>
      <Menu />
    </>
  );
}

export default Profile;
