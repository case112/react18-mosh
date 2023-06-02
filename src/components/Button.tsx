import React from "react";

interface Props {
  children: string;
  // union type
  type?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

export const Button = ({ children, type = "primary", onClick }: Props) => {
  return (
    <button type="button" className={" btn btn-" + type} onClick={onClick}>
      {children}
    </button>
  );
};
