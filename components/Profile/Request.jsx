import { useContext, useState } from "react";
import styles from "../../styles/Home.module.css";
import AuthContext from "@/store/AuthContext";
import { requestGarbage } from "@/helper/login-utils";
import { notification } from "antd";

export default function RequestPage(){
    // const [name, setName] = useState("");
    // const [mobile, setMobile] = useState("");
    // const [address, setAddress] = useState("");
    const [garbageType, setGarbageType] = useState("plastic");


    const authCtx = useContext(AuthContext);

    const handleGarbageRequest = async ()=>{
        await requestGarbage(authCtx.userId, authCtx.userData.name, authCtx.userData.phone, authCtx.userData.address);
        notification['success']({
            message: `Garbage Request placed`,
            duration: 2
        })
    }

    return (
        <>
            <div className={styles.profileContainer}>
                <h4 className={styles.profileHeading}>Request a Garbage Recycle</h4>

                <form className={styles.requestForm}>
                    <div>
                        <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" value={authCtx.userData.name} disabled/>
                    </div>
                    
                    <div>
                    <label htmlFor="mobile">Mobile:</label>
                    <input type="number" id="mobile" placeholder="Enter your mobile no." value={authCtx.userData.phone} disabled/>
                    </div>

                    <div>
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" placeholder="Enter your address" value={authCtx.userData.address} disabled/>
                    </div>
                    <div>
                        <label htmlFor="garbageType" className={styles.selectType}>Type of Waste: </label>
                        <select id="garbageType" onChange={(e)=>{setGarbageType(e.target.value)}}>
                            <option value="plastic">Plastic Waste</option>
                            <option value="bio_degradable">Bio-Degradable Waste</option>
                            <option value="both">Both</option>
                        </select>
                    </div>
                    <div className={styles.requestButton} onClick={handleGarbageRequest}>Request</div>

                </form>
            </div>
        </>
    )
}