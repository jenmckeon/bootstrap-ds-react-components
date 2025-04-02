// rafce reactArrowFunctionExportComponent which gives us the component below
import React, { ReactNode } from "react";

/* Time to make the alert dynamic -- we will use interface Props */
interface Props {
  children: ReactNode; //Replace string with ReactNode and import it. This way we can pass html content through our children components
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
