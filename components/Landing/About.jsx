
import styles from '../../styles/Landing.module.css'

const About = () => {
    return (
        <>
            <section class={styles.about}>

                <div className={styles.aboutHeading}>
                    <h1 class={styles.heading}>About<span> Us</span></h1>
                </div>

                <div class={styles.aboutSidebox}>

                    <div class={styles.aboutSideboxImageDiv}>
                        <img src="/assets/landing/about.svg" alt="about-us" />
                    </div>

                    <div class={styles.aboutContent}>

                        <h3> We Take Care of Your Waste</h3>

                        <p>
                            When your health is our first priority then to take care of your goods is our responsibility. EcoFirst
                            brings you an effective management system that stores your documents and details secure.
                        </p>

                        <div className={styles.buttonContainer}>
                            <a href="/family" className={styles.btn}>Learn More </a>
                        </div>                    </div>
                </div>
            </section>
        </>
    )
}

export default About