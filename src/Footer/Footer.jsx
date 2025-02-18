import styles from "./Footer.module.css";
import instagram from "../assets/images/instagram.svg"
import linkedin from "../assets/images/linkedin.svg"
import gmail from "../assets/images/gmail.svg"
import twitter from "../assets/images/twitter.svg"

function Footer () {
    
    return (
        <footer>

            <div className={styles.contact}> Reach me at </div>
            
            <div className={styles.socials}>
                <div> <img src={instagram} /> </div>
                <div> <img src={linkedin} /> </div>
                <div> <img src={gmail} /> </div>
                <div> <img src={twitter} /> </div>
            </div>

            <div className={styles.notices}> 
                <div className={styles.privacy}>
                    Privacy Policy
                </div>

                <div className={styles.terms}>
                    Terms & Conditions
                </div>
            </div>

            <div className={styles.copyright}> &copy; 2025 Saiyam Jain - All Rights reserved </div>
            <div className={styles.made}> Made by - Shreekrishna Udupa </div>

        </footer>
    );
}

export default Footer;