"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Quiz from "@/components/quiz";

const QuizPage = () => {
  const [live, setLive] = useState(true);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.heading}>
            Quiz Status <span className={styles.highlight_yellow}>••••</span>{" "}
            <span
              className={live ? styles.highlight_green : styles.highlight_red}
            >
              {live ? "Live" : "End"}
            </span>
          </h1>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <Quiz live={live} setLive={setLive} />
        </div>
      </main>
    </>
  );
};

export default QuizPage;
