import React from 'react';
import styles from "./Navigation.module.css";
const Navigation=()=>{
// console.log(styles);
// console.log("om namah shivay")
return (
<nav className={` container ${styles.navigation} `}>
<div className="logo">
    <img src="./public/images/Frame 2 1.png"></img>
</div>
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>
</nav>
)
};
export default Navigation;