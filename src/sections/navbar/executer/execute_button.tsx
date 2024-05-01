import styles from "./executer.module.css";

import Image from "next/image";
import { SocketState } from "@/types/socket";

export default function ExecuteButton({ onClick, socketStatus }) {
  return (
    <button
      className={styles.run_container}
      onClick={onClick}
      disabled={
        socketStatus === SocketState.Connecting ||
        socketStatus === SocketState.Failed
      }
    >
      <Image src={"/Run_Button.svg"} height={10} width={10} alt="Execute" />
      <div className={styles.runner_text}>Execute</div>
    </button>
  );
}
