import React from "react";
import styles from './index.module.scss'; 
import Link from 'next/link';

export default class Register extends React.Component<{},any> {
    render(){
    return (
        <div className={`${styles.body}`} >
        <div className={`${styles.formregister}`} >
        <div className={`${styles.contactform1}`}>
          <div className={`${styles.contactw3agileits}`}>
            <h3>Register Form</h3>
            <form action="#" method="post">
              <div className={`${styles.formsubw3ls}`}>
                <input placeholder="User Name" type="text" required />
                <div className={`${styles.iconagile}`}>
                  <i className={`${styles.fafauser}`} aria-hidden="true" />
                </div>
              </div>
              <div  className={`${styles.formsubw3ls}`}>
                <input placeholder="Email" className="mail" type="email" required />
                <div  className={`${styles.iconagile}`}>
                  <i  className={`${styles.fafaenvelopeo}`} aria-hidden="true" />
                </div>
              </div>
              <div className={`${styles.formsubw3ls}`} >
                <input placeholder="Password" type="password" required />
                <div className={`${styles.iconagile}`}>
                  <i  className={`${styles.fafaunlockalt}`} aria-hidden="true" />
                </div>
              </div>
              <div  className={`${styles.formsubw3ls}`}>
                <input placeholder="Confirm Password" type="password" required />
                <div  className={`${styles.iconagile}`}>
                  <i className={`${styles.fafaunlockalt}`} aria-hidden="true" />
                </div>
              </div>
              <div className={`${styles.logincheck}`}>
                <label className={`${styles.checkbox}`}><input type="checkbox" name="checkbox" defaultChecked />I Accept Terms &amp; Conditions</label>
              </div>
              <div className={`${styles.submitw3l}`}>
                <Link href="/login" >
                  <button>Cancel</button>
                </Link>
                <input type="submit" defaultValue="Register" />
              </div>
            </form>
          </div>
        </div>	
      </div>
    </div>
        );
    }
}