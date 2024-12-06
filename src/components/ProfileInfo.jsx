import styles from "./ProfileInfo.module.css";

import ProfilePic from "../assets/images/profile-pic.jpg";
import StarIcon from "../assets/icons/StarIcon.svg";
import ClockIcon from "../assets/icons/ClockIcon.svg";
import VerifiedIcon from "../assets/icons/VerifiedIcon.svg";
import EditIcon from "../assets/icons/EditIcon.svg";

function ProfileInfo() {
  return (
    <section>
      <div className={styles.profile}>
        <img src={ProfilePic} alt="Profile pic" />
        <p>Rafael Rodrigues</p>
        <div className={styles.editPic}>
          <img src={EditIcon} alt="Edit Icon" />
          <p>Editar foto</p>
        </div>
        <div className={styles.info}>
          <div>
            <img src={VerifiedIcon} alt="Verified Icon" />
            <p>Perfil Verificado</p>
          </div>
          <div>
            <img src={StarIcon} alt="Star Icon" />
            <p>4.5 Avaliações</p>
          </div>
          <div>
            <img src={ClockIcon} alt="Clock Icon" />
            <p>10 meses no app</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
