import styles from "./navbar.module.css";

import Image from "next/image";

export default function InviteButton() {
  return (
    <button className={styles.invite_container}>
      <Image src={"/invite_icon.svg"} height={15} width={15} alt="Invite" />
      <div className={styles.invite_text}>Invite</div>
    </button>
  );
}
