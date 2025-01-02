"use client";

import React, { useState } from "react";
import styles from "./quiz.module.css";
import { quiz } from "@/data";
import Unit from "./unit";
import ProgressButton from "./progressButton";
import Result from "./result";
import RestartButton from "./restartButton";

const Quiz = ({ live, setLive }) => {
  const [unitIndex, setUnitIndex] = useState(0);
  const [unitAttempted, setUnitAttempted] = useState(undefined);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState({
    selectedOptions: [],
  });

  return (
    <div className={styles.container}>
      {live ? (
        <>
          <Unit
            key={quiz[unitIndex].id}
            unit={quiz[unitIndex]}
            serialNumber={unitIndex + 1}
            setUnitAttempted={setUnitAttempted}
            setSelectedOption={setSelectedOption}
          />
          <ProgressButton
            unitAttempted={unitAttempted}
            currentIndex={unitIndex}
            lastIndex={quiz.length - 1}
            setUnitIndex={setUnitIndex}
            setUnitAttempted={setUnitAttempted}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setResult={setResult}
            live={live}
            setLive={setLive}
          />
        </>
      ) : (
        <>
          <Result quiz={quiz} result={result} />
          <RestartButton
            setUnitIndex={setUnitIndex}
            setUnitAttempted={setUnitAttempted}
            setSelectedOption={setSelectedOption}
            setResult={setResult}
            setLive={setLive}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
