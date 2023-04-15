import { useState } from "react";
import styles from "../../styles/Home.module.css";

export default function RequestPage(){
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [garbageType, setGarbageType] = useState("plastic");
    return (
        <>
            <div className={styles.profileContainer}>
                <h4 className={styles.profileHeading}>Request a Garbage Recycle</h4>

                <form className={styles.requestForm}>
                    <div>
                        <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    
                    <div>
                    <label htmlFor="mobile">Mobile:</label>
                    <input type="number" id="mobile" placeholder="Enter your mobile no." value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" placeholder="Enter your address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="garbageType" className={styles.selectType}>Type of Waste: </label>
                        <select id="garbageType" onChange={(e)=>{setGarbageType(e.target.value)}}>
                            <option value="plastic">Plastic Waste</option>
                            <option value="bio_degradable">Bio-Degradable Waste</option>
                        </select>
                    </div>
                    <button >Request</button>

                </form>
            </div>
        </>
    )
}