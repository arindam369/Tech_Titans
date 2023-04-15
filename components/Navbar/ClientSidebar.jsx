import styles from "../../styles/Home.module.css";
export default function Sidebar({onUpdateBullet}){

    return (
        <>
            <div className={styles.sidebarContainer}>
                <div onClick={()=>{onUpdateBullet("profile")}}>Your Profile</div>
                <div onClick={()=>{onUpdateBullet("request")}}>Make a Request</div>
                <div onClick={()=>{onUpdateBullet("gifts")}}>Gifts</div>
                <div onClick={()=>{onUpdateBullet("settings")}}>Settings</div>
            </div>
        </>
    )
}