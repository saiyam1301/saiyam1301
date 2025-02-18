import styles from "./Nav.module.css";

function Nav() {
    return (
        <nav>

            <div className={styles.saiyamContainer} >
                <div className={styles.saiyam}> Saiyam </div>
            </div>

            <div className={styles.otherContainer}>
                <div className={styles.home}> Home </div>
                <div className={styles.works}> Works </div>
                <div className={styles.contact}> Contact Me </div>
            </div>

        </nav>
    );
}

export default Nav;
