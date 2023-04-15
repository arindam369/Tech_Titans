import { FaAngleDoubleRight } from "react-icons/fa"

import styles from '../../styles/Landing.module.css'


const Footer = () => {
    return (
        <>
            <section className={styles.footer}>

                <div className={styles.footerBoxContainer}>

                    <div className={styles.footerBox}>

                        <h3>Quick Links</h3>

                        <a href="#"> <FaAngleDoubleRight className='quote-icon' /> Home </a>
                        <a href="#services"> <FaAngleDoubleRight className='quote-icon' /> Features </a>
                        <a href="#about"> <FaAngleDoubleRight className='quote-icon' /> About Us </a>
                        <a href="#reviews"> <FaAngleDoubleRight className='quote-icon' /> Reviews </a>
                        <a href="/signup" target="_blank"> <FaAngleDoubleRight className='quote-icon' /> Sign Up </a>
                    </div>

                    <div className={styles.footerBox}>
                        <h3>Contact Info</h3>
                        <a href="#">  +123-456-7890 </a>
                        <a href="#"> +111-222-3333 </a>
                        <a href="#"> clinicare@gmail.com </a>
                        <a href="#"> Kolkata, India - 700 001 </a>
                    </div>

                    <div className={styles.footerBox}>
                        <h3>Follow Us</h3>
                        <a href="#">Instagram </a>
                        <a href="#">FaceBook </a>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Footer