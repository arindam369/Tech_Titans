import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { useContext } from "react";
import AuthContext from "@/store/AuthContext";

export default function Navbar(){
  const router = useRouter();

  const authCtx = useContext(AuthContext);
  const handleLogout = ()=>{
    authCtx.logout();
  }

  const goToHome = ()=>{
    router.push("/");  
  }

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navLeft} onClick={goToHome}>
          EcoFirst
        </div>
        <div className={styles.navRight}>
          <div onClick={()=>{router.push("/dashboard")}}>Dashboard</div>
          {!authCtx.isAuthenticated && <div onClick={()=>{router.push("/register")}}>Login</div>}
          {authCtx.isAuthenticated && <div onClick={handleLogout}>Logout</div>}
        </div>
      </div>
    </>
  )
}