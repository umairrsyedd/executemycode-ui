import styles from "./executer.module.css";

import Image from "next/image";

export default function StopButton({ onClick }) {
  return (
    <button className={styles.stop_container} onClick={onClick}>
      <Image src={"/Stop_Button.svg"} height={10} width={10} alt="Stop" />
      <div className={styles.runner_text}>Stop</div>
    </button>
  );
}
