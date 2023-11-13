import react from "react";
import styles from "./Contactform.module.css";
import Button from "../Button/Button";
import {BsTelephone} from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import {MdEmail} from "react-icons/md";
const ContactForm=()=>{

    const onsubmit=(event)=>{
        event.preventDefault();     
        name=event.target[0].value;
        email=event.target[1].value;
        text=event.target[2].value;
    }; 
    return (
        <section className={styles.container}>
           <div className={styles.contact_form}>
           <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<BsTelephone fontSize="24px"/>}/>     
           </div>
            <Button  isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>}/>
       
      <form onSubmit={onsubmit}>
      <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>
      </div>
      <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>
      </div>
      <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea  name="text" rows={8} />
      </div>
    <div style={{
            display :"flex",
            justifyContent:"end",
    }}>
      <Button  text="SUBMIT BUTTON"/>
      </div>
    
      </form>
      </div>
        <div className={styles.contact_image}>
          <img src="./public/images/Service 24_7-pana 1.svg" alt="contact images"></img>
        </div>  
    </section>
    
    );
    
}
export default ContactForm;