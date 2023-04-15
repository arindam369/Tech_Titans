import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Navbar(){
  const router = useRouter();

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navLeft}>
          EcoFirst
        </div>
        <div className={styles.navRight}>
          <div onClick={()=>{router.push("/dashboard")}}>Dashboard</div>
          <div onClick={()=>{router.push("/register")}}>Login</div>
        </div>
      </div>
    </>
  )
}