import styles from "./styles.module.scss";

export default function ResultDisplay({ title, value }) {
  return (
    <section className={styles.resultDisplay}>
      <div className={styles.resultTitle}>
        <h5>{title}</h5>
        <span>/ person</span>
      </div>
      <h1 className={styles.resultValue}>${value}</h1>
    </section>
  );
}
