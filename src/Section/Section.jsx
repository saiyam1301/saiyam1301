import styles from "./Section.module.css"
import Info from "../Info/Info.jsx";
import Footer from "../Footer/Footer.jsx";
import saiyamImage from "../assets/images/saiyam.png";

function Section () {

    return (
        <section className={styles.mainContainer}>

            <div className={styles.leftContainer}>
                <Info />
                <Footer />
            </div>

            <div className={styles.rightContainer}>
                <img src={saiyamImage} className={styles.profilePic} alt="Profile Image" />
            </div>

        </section>
    );
}

export default Section;