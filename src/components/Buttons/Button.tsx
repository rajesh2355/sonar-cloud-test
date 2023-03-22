import React from "react";
import "./Button.css";
interface ButtonProps {
  label: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className:
    | "button primary"
    | "button secondary"
    | "button success"
    | "button warning";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClickHandler,
  className,
}) => {
  const buttonClass = `${className}`;
  return (
    <button onClick={onClickHandler} className={buttonClass}>
      {label}
    </button>
  );
};

export default Button;
