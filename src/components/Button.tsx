import React from "react";

/* To make the button text dynamic, use interface Props */
interface Props {
  //Replace string with ReactNode and import it. This way we can pass html content through our children components
  children: string;
  //The question mark after the color prop indicates that this color prop is optional.
  //Adding string literals will only allow you to set the color values defined here. Using any other strings will throw a compilation error. Use union operator to define all colors as shown
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
