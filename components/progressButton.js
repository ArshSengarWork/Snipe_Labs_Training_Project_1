import React from "react";
import styles from "./progressButton.module.css";

const ProgressButton = ({
  unitAttempted,
  currentIndex,
  lastIndex,
  setUnitIndex,
  setUnitAttempted,
  selectedOption,
  setSelectedOption,
  setResult,
  setLive,
}) => {
  const handleClick = () => {
    setResult((previousResult) => {
      let updatedSelectedOptions;
      if (unitAttempted) {
        updatedSelectedOptions = [
          ...previousResult.selectedOptions,
          selectedOption,
        ];
      } else {
        updatedSelectedOptions = [...previousResult.selectedOptions, ""];
      }
      return { ...previousResult, selectedOptions: updatedSelectedOptions };
    });
    setUnitAttempted(undefined);
    setSelectedOption("");
    if (currentIndex < lastIndex) {
      setUnitIndex(++currentIndex);
    } else {
      setLive(false);
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.progress_button}
        type="button"
        onClick={handleClick}
      >
        {currentIndex < lastIndex
          ? unitAttempted
            ? "Next"
            : "Skip"
          : "Finish"}
      </button>
    </div>
  );
};

export default ProgressButton;
