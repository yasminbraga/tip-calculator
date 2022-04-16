import styles from "./styles.module.scss";

export default function NumberInput({
  className,
  id,
  error,
  iconSrc,
  label,
  value,
  onChange,
}) {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.errorField}>
        <label className="label" htmlFor={id}>
          {label}
        </label>
        <span>{error}</span>
      </div>
      <div className={styles.inputIconContainer}>
        <img className={styles.icon} src={iconSrc} alt="" />
        <input
          type="number"
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={className}
        />
      </div>
    </div>
  );
}
