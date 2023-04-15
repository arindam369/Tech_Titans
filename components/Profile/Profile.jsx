import { useContext } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import AuthContext from "@/store/AuthContext";

export default function Profile(){
    const authCtx = useContext(AuthContext);


    return (
        <>
            <div className={styles.profileContainer}>
                <div className={styles.profileDpAddress}>
                    <div className={styles.profileDp}>
                        <Image src={"https://assets.leetcode.com/users/avatars/avatar_1646054996.png"} height={300} width={300} alt="profileDp" className={styles.profileImage}/>
                        <h4>{authCtx.userId}</h4>
                    </div>
                    <div className={styles.profileAddressScore}>
                        <div className={styles.profileData}>
                            <div className={styles.profileQues}>Name:</div>
                            <div className={styles.profileAns}>{authCtx.userData.name}</div>
                        </div>
                        <div className={styles.profileData}>
                            <div className={styles.profileQues}>Email:</div>
                            <div className={styles.profileAns}>{authCtx.userData.email}</div>
                        </div>
                        <div className={styles.profileData}>
                            <div className={styles.profileQues}>Mobile:</div>
                            <div className={styles.profileAns}>{authCtx.userData.phone}</div>
                        </div>
                        <div className={styles.profileData}>
                            <div className={styles.profileQues}>Address:</div>
                            <div className={styles.profileAns}>{authCtx.userData.address}</div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className={styles.profileScores}>
                        <div className={styles.profileScoreBox}>
                            <div className={styles.profileScoreQuesAns}>
                                <div className={styles.profileScoreQues}>Plastic Score</div>
                                <div className={styles.profileScoreAns}>557</div>
                            </div>
                            <div className={styles.profileScoreImage}>
                                <Image src={"/assets/plastic.png"} height={100} width={100} alt="scoreIcon" className={styles.profileScoreIcon}/>
                            </div>
                        </div>
                        <div className={styles.profileScoreBox}>
                            <div className={styles.profileScoreQuesAns}>
                                <div className={styles.profileScoreQues}>Biodegradable Score</div>
                                <div className={styles.profileScoreAns}>557</div>
                            </div>
                            <div className={styles.profileScoreImage}>
                                <Image src={"/assets/eco-bag.png"} height={100} width={100} alt="scoreIcon" className={styles.profileScoreIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.coinSection}>
                    <div className={styles.profileScoreQues}>Total Coins:</div>
                    <Image src={"/assets/star.png"} height={50} width={50} alt="coin" className={styles.coinIcon}/> {authCtx.userData.coins}
                </div>
            </div>
        </>
    )
}