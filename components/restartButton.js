import React from "react";
import styles from "./restartButton.module.css";

const RestartButton = ({
  setUnitIndex,
  setUnitAttempted,
  setSelectedOption,
  setResult,
  setLive,
}) => {
  const handleClick = () => {
    setUnitIndex(0);
    setUnitAttempted(undefined);
    setSelectedOption("");
    setResult((previousResult) => {
      const updatedSelectedOptions = [];
      return { ...previousResult, selectedOptions: updatedSelectedOptions };
    });
    setLive(true);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.restart_button}
        type="button"
        onClick={handleClick}
      >
        Restart
      </button>
    </div>
  );
};

export default RestartButton;
