import React, { useState } from "react";
import styles from "./unit.module.css";

const Unit = ({ unit, serialNumber, setUnitAttempted, setSelectedOption }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const onOptionSelect = (option, index) => {
    setUnitAttempted(true);
    setSelectedOption(option);
    setSelectedOptionIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.unit_index}>
        <h1 className={styles.index}>{serialNumber}.</h1>
      </div>
      <div className={styles.unit}>
        <h1 className={styles.question}>{unit.question}</h1>
        <ul className={styles.options}>
          {unit.options.map((option, index) => (
            <li
              className={
                selectedOptionIndex === index
                  ? styles.option_active
                  : styles.option_hover
              }
              key={index}
              onClick={() => onOptionSelect(option, index)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Unit;
