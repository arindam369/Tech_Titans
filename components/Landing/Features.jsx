import styles from '../../styles/Landing.module.css'

const Features = () => {
    return (
        <>
            <section className={styles.services}>

                <div>
                    <h1 className={styles.heading}>Fea<span>tures</span></h1>
                </div>

                <div className={styles.servicesContainer}>

                    <div className={styles.service}>

                        <div className={styles.serviceContentHeading}>
                            <h3>Waste Management</h3>
                        </div>

                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam animi excepturi tenetur quo odit. Maiores eligendi iusto nostrum beatae alias.
                            </p>
                        </div>


                        <div className={styles.buttonContainer}>
                            <a href="/family" className={styles.btn}>Learn More </a>
                        </div>

                    </div>

                    <div className={styles.service}>

                        <div className={styles.serviceContentHeading}>
                            <h3>Waste Management</h3>
                        </div>

                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam animi excepturi tenetur quo odit. Maiores eligendi iusto nostrum beatae alias.
                            </p>
                        </div>


                        <div className={styles.buttonContainer}>
                            <a href="/family" className={styles.btn}>Learn More </a>
                        </div>

                    </div>

                    <div className={styles.service}>

                        <div className={styles.serviceContentHeading}>
                            <h3>Waste Management</h3>
                        </div>

                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam animi excepturi tenetur quo odit. Maiores eligendi iusto nostrum beatae alias.
                            </p>
                        </div>


                        <div className={styles.buttonContainer}>
                            <a href="/family" className={styles.btn}>Learn More </a>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Features