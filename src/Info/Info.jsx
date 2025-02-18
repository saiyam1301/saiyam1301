import styles from "./Info.module.css";
import NumberTicker from "../components/NumberTicker.jsx";

function Info () {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.name}> Hi! I Am <br/> Saiyam Jain </div>
            <div className={styles.skills}> Editor | Videographer | Content Creator </div>
            
            <div className={styles.contactWork}>
                <div className={styles.contact}> Contact Me </div>
                <div className={styles.projects}> My Projects </div>
            </div>

            <div className={styles.achievementsContainer}>

                <div className={styles.achievement}> 
                    5 Years of Experience <br/>
                    In PR & Content Strategy
                </div>

                <div className={styles.achievement}> 
                    20 Freelancing Projects <br/>
                    for Multiple Brands & Companies
                </div>

                <div className={styles.achievement }> 
                    <NumberTicker value={100} />k+ views generated <br/>
                    across different platforms
                </div>

                <div className={styles.achievement}> 
                    <NumberTicker value={50} />+ Videos edited <br/>
                    for YouTube, Instagram & Commercials
                </div>

            </div>            
        </div>
    );
}

export default Info;