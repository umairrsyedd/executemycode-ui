import styles from "./executer.module.css";

import Image from "next/image";
import ExecuteButton from "./execute_button";
import { useState } from "react";
import StopButton from "./stop_button";
import LoadingButton from "./loading_button";
import { ProgramState } from "@/types/program";

export default function Executer({
  programState,
  handleExecute,
  handleStop,
  socketStatus,
}) {
  const loading = programState === ProgramState.Loading;

  return (
    <div className={styles.runner_wrapper}>
      {loading && <LoadingButton />}

      {!loading && programState === ProgramState.Idle && (
        <ExecuteButton onClick={handleExecute} socketStatus={socketStatus} />
      )}

      {!loading && programState === ProgramState.Executing && (
        <StopButton onClick={handleStop} />
      )}
    </div>
  );
}
