import styles from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <section>
      <div className={styles.profile}>
        <img src="images/profile-pic.jpg" alt="Profile pic" />
        <p>Rafael Rodrigues</p>
        <div className={styles.editPic}>
          <img src="icons/EditIcon.svg" alt="Edit Icon" />
          <p>Editar foto</p>
        </div>
        <div className={styles.info}>
          <div>
            <img src="icons/VerifiedIcon.svg" alt="Verified Icon" />
            <p>Perfil Verificado</p>
          </div>
          <div>
            <img src="icons/StarIcon.svg" alt="Star Icon" />
            <p>4.5 Avaliações</p>
          </div>
          <div>
            <img src="icons/ClockIcon.svg" alt="Clock Icon" />
            <p>10 meses no app</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
