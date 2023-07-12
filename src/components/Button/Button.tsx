import styles from "./Button.module.css";

interface Props {
  children: string;
  // union type
  type?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

export const Button = ({ children, type = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + type]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
