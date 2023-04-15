import { useContext, useState } from "react";
import { notification } from "antd";
import styles from "../../styles/Home.module.css";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "@/firebase";
import { registerAccount } from "@/helper/login-utils";
import AuthContext from "@/store/AuthContext";


export default function Register({onLogin}){
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [pass, setPass] = useState("");
    const [userType, setUserType] = useState("user");

    const authCtx = useContext(AuthContext);
    authCtx.stopLoading();

    function handleRegister(){
        // handle all validations
        if(fullname.trim().length === 0 || email.trim().length === 0 || phone.trim().length === 0 || address.trim().length === 0 || pass.trim().length === 0){
            // setError("All fields are mandatory");
            notification['error']({
                message: `All fields are mandatory`,
                duration: 2
            })
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
            return;
        }
        if(phone.trim().length !== 10){
            notification['error']({
                message: `Invalid phone no.`,
                duration: 2
            })
            return;
        }

        const isPassValid = pass.match(/[a-z]/g) && pass.match(/[A-Z]/g) && pass.match(/[0-9]/g) && pass.match(/[^a-zA-Z\d]/g) && pass.length >= 6;
        if(!isPassValid){
            notification['error']({
                message: `Password must contain atleast 1 uppercase, 1 lowercase, 1 digit & 1 special character`,
                duration: 2
            })
            return;
        }

        // registration
        createUserWithEmailAndPassword(auth , email, pass).then(async (userCredential)=>{
            const userId = email && email.split("@")[0].replace(/[.+-]/g, "_");
            console.log(userId);
            await registerAccount(userId, fullname, email, phone, address, userType);
            notification['success']({
                message: `Account created successfully`,
                duration: 2
            })
            
            onLogin();
            var user = auth.currentUser;
            console.log(user);
            await sendEmailVerification(user);
            notification['success']({
                message: `Email verification link sent`,
                duration: 2
            })
            authCtx.logout();
            authCtx.stopLoading();
        }).catch((err)=>{
            console.log(err);
            notification['error']({
                message: `Email already registered`,
                duration: 2
            })
        })
    }


    return (
        <div className={styles.registerPage}>
            <div className={styles.registerContainer}>
                <h3>EcoFirst | Create Your Account</h3>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="fullname">Name: </label>
                    <input type="text" id="fullname" placeholder="Enter your full name" value={fullname} onChange={(e)=>{setFullname(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="phone">Mobile: </label>
                    <input type="number" id="phone" placeholder="Enter your Mobile Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="address">Address: </label>
                    <input type="text" id="address" placeholder="Enter your Address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input type="password" id="pass" placeholder="Enter password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="userType" className={styles.selectType}>Register as: </label>
                    <select id="userType" onChange={(e)=>{setUserType(e.target.value)}}>
                        <option value="user">User</option>
                        <option value="collector">Collector</option>
                    </select>
                </div>
                <button className={styles.registerButton} onClick={handleRegister}>Register</button>
                <div className={styles.alreadyHaveAccount}>Already have an account? <div onClick={()=>{onLogin()}}>Login</div></div>
            </div>
        </div>
    )
}