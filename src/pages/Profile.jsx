import Menu from "../components/Menu";
import Main from "../components/Main";
import Header from "../components/Header";

import ArrowIcon from "../assets/icons/ArrowIcon";
import ProfileInfo from "../components/ProfileInfo";

function Profile() {
  return (
    <>
      <Header>
        <ArrowIcon />
        <h1>Meu perfil</h1>
        <ProfileInfo />
      </Header>
      <Main></Main>
      <Menu />
    </>
  );
}

export default Profile;
