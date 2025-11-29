import React, { useState } from "react";
import classes from "./Button.module.css";
import { IoMdAdd } from "react-icons/io";
const Button = ({ addTitle, click }) => {
  const [title, setTitle] = useState(addTitle);

  return (
    <button className={classes.addSubject} onClick={click}>
      {" "}
      <IoMdAdd style={{ width: "24px", height: "24px" }} /> {title}
    </button>
  );
};

export default Button;
