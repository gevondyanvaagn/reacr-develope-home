import React from "react";
import classe from "./myInput.module.css";

const MyInput = (props) => {
  return <input {...props} className={classe.myInput} />;
};

export default MyInput;
