import { NavLink } from "react-router-dom";

import Menu from "../components/Menu";
import Main from "../components/Main";
import Header from "../components/Header";

import ArrowIcon from "../assets/icons/ArrowIcon";
import ProfileInfo from "../components/ProfileInfo";
import PersonalInfo from "../components/PersonalInfo";

function Profile() {
  return (
    <>
      <Header>
        <NavLink to="/">
          <ArrowIcon />
        </NavLink>
        <h1>Meu perfil</h1>
      </Header>
      <Main>
        <ProfileInfo />
        <PersonalInfo />
      </Main>
      <Menu />
    </>
  );
}

export default Profile;
