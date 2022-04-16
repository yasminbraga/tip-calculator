import styles from "./styles.module.scss";

export default function SelectTipInput({ onChangeSelect, value, isChecked }) {
  return (
    <label className={styles.selectBtn}>
      <input
        type="radio"
        value={value}
        onChange={onChangeSelect}
        checked={isChecked}
        className={styles.inputContainer}
      />
      <span>{value}%</span>
    </label>
  );
}
