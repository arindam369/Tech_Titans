import { useContext } from "react";
import styles from "../../styles/Home.module.css";
import AuthContext from "@/store/AuthContext";
export default function Sidebar({onUpdateBullet}){
    const authCtx = useContext(AuthContext);
    return (
        <>
            <div className={styles.sidebarContainer}>
                <div onClick={()=>{onUpdateBullet("profile")}}>Your Profile</div>
                {authCtx.userData.userType==="user" && <div onClick={()=>{onUpdateBullet("request")}}>Make a Request</div>}
                {authCtx.userData.userType==="collector" && <div onClick={()=>{onUpdateBullet("request")}}>View all Requests</div>}
                <div onClick={()=>{onUpdateBullet("gifts")}}>Gifts</div>
                <div onClick={()=>{onUpdateBullet("settings")}}>Settings</div>
            </div>
        </>
    )
}