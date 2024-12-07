/* eslint-disable react/prop-types */
import styles from "./Input.module.css";

function Input({
  className,
  type,
  id,
  value,
  placeholder,
  onChange,
  disabled,
  label,
  labelFor,
  labelName,
}) {
  return (
    <>
      <input
        className={`${styles.inp} ${styles[className]}`}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
      {label && <label htmlFor={labelFor}>{labelName}</label>}
    </>
  );
}

export default Input;
