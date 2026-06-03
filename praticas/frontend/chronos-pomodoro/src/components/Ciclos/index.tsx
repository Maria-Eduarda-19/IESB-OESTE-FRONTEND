import styles from "./styles.module.css";

export function Ciclos() {
  return (
    <div className={styles.ciclos}>
      <span>Ciclos:</span>

      <div className={styles.cicloDots}>
        {/* Usamos ` ${} ${} ` para concatenar as classes do CSS Module */}
        <span className={`${styles.cicloDot} ${styles.workTime}`}></span>
        <span className={`${styles.cicloDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cicloDot} ${styles.workTime}`}></span>
        <span className={`${styles.cicloDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cicloDot} ${styles.workTime}`}></span>
        <span className={`${styles.cicloDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cicloDot} ${styles.workTime}`}></span>
        <span className={`${styles.cicloDot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}
