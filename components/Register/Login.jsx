import { useContext, useState } from "react";
import styles from "../../styles/Home.module.css";
import { notification } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "@/helper/login-utils";
import AuthContext from "@/store/AuthContext";
import { auth } from "@/firebase";
import { useRouter } from "next/router";

export default function Login({onRegister}){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    
    const authCtx = useContext(AuthContext);
    const router = useRouter();
    // authCtx.stopLoading();
    
    async function handleLogin(){
        // handle all validations
        authCtx.startLoading();
        if(email.trim().length === 0 || pass.trim().length === 0){
            // setError("All fields are mandatory");
            // notification.error("All fields are mandatory");
            notification['error']({
                message: `All fields are mandatory`,
                duration: 2
            })
            authCtx.stopLoading();
            return;
        }

        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const isEmailValid = emailRegex.test(email);
        if(!isEmailValid){
            // setError("Invalid Email input");
            notification['error']({
                message: `Invalid email input`,
                duration: 2
            })
            authCtx.stopLoading();
            return;
        }

        // login
        signInWithEmailAndPassword(auth, email, pass).then(async (userCredentials)=>{
            if(!userCredentials.user.emailVerified){
                authCtx.logout();
                // setError("Email not verified yet");
                notification['error']({
                    message: `Email not verified yet`,
                    duration: 2
                })
                authCtx.stopLoading();
                return;
            }
            else{
                const userId = email.split("@")[0].replace(/[.+-]/g, "_");
                await updateProfile(userId, "isVerified", true, authCtx.stopLoading);
                // console.log("Logged In");
                // authCtx.stopLoading();
                router.push("/dashboard");
            }
        
        }).catch((err)=>{
            notification['error']({
                message: `Wrong email or password`,
                duration: 2
            })
            console.log(err);
            authCtx.stopLoading();
        })
    }

    return (
        <div className={styles.registerPage}>
            <div className={styles.registerContainer}>
                <h3>EcoFirst | Login Your Account</h3>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input type="password" id="pass" placeholder="Enter password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
                </div>
                <button className={styles.registerButton} onClick={handleLogin}>Login</button>
                <div className={styles.alreadyHaveAccount}>Don't have an account? <div onClick={()=>{onRegister()}}>Register</div> <div className={styles.forgotPass}>Forgot Password</div></div>
            </div>
        </div>
    )
}