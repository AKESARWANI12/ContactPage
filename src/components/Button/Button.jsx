import React from 'react'
import {MdMessage} from "react-icons/md";
import {BsTelephone} from "react-icons/bs";
import styles from "./Button.module.css";
const Button = (props) => {
  const {isOutline,icon,text,...rest}=props;

{icon}
  return (
    <button {...rest} className={isOutline? styles.outline_btn: styles.primary_btn}>
      
      {icon}
      {text}
    </button>
  );
};

export default Button;
