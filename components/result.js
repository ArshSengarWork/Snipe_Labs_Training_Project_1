import React from "react";
import styles from "./result.module.css";

const Result = ({ quiz, result }) => {
  let score = 0,
    attempts = 0,
    correctOptions = 0,
    wrongOptions = 0;
  for (let index = 0; index < quiz.length; ++index) {
    if (result.selectedOptions[index] !== "") {
      ++attempts;
      if (result.selectedOptions[index] === quiz[index].answer) {
        ++correctOptions;
        score += 5;
      } else {
        ++wrongOptions;
        score -= 1;
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.score}>
        <h1 className={styles.score_heading}>Performance</h1>
        <div>
          <div>
            <p className={styles.details}>
              Score: <span className={styles.highlight_yellow}>{score}</span>
            </p>
            <p className={styles.details}>
              Attempts:{" "}
              <span className={styles.highlight_yellow}>
                {attempts}/{quiz.length}
              </span>
            </p>
          </div>
          <div>
            <p className={styles.details}>
              Correct Opted Options:{" "}
              <span className={styles.highlight_green}>{correctOptions}</span>
            </p>
            <p className={styles.details}>
              Wrong Opted Options:{" "}
              <span className={styles.highlight_red}>{wrongOptions}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <h1 className={styles.review_heading}>Review</h1>
        {quiz.map((unit, unitIndex) => (
          <div key={unitIndex} className={styles.unit_container}>
            <h1 className={styles.question}>{unit.question}</h1>
            <ul className={styles.options}>
              {unit.options.map((option, optionIndex) => (
                <li
                  className={
                    result.selectedOptions[unitIndex] === ""
                      ? option === unit.answer
                        ? styles.unattempted_option
                        : styles.option
                      : result.selectedOptions[unitIndex] === unit.answer
                      ? option === unit.answer
                        ? styles.correct_option
                        : styles.option
                      : option === unit.answer
                      ? styles.correct_option
                      : option === result.selectedOptions[unitIndex]
                      ? styles.wrong_option
                      : styles.option
                  }
                  key={optionIndex}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
