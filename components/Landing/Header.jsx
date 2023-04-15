
import styles from '../../styles/Landing.module.css'

const Header = () => {
  return (
    <>
      <section className={styles.header}>

        <div className={styles.header_image_div}>
          <img src="/assets/landing/green.svg" alt="" className={styles.header_image}/>
        </div>

        <div className={styles.header_content}>

          <h3>Eco First</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat molestias sed consequuntur adipisci, debitis, illo nesciunt accusantium cupiditate dolore ullam optio et repudiandae eligendi distinctio. Nesciunt natus aspernatur eos consequuntur!
          </p>

        </div>
      </section>
    </>
  )
}

export default Header