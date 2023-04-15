import Navbar from "@/components/Navbar/Navbar";
import Login from "@/components/Register/Login";
import Register from "@/components/Register/Register";
import { useState } from "react";

export default function RegisterPage(){
    const [visibleComponent, setVisibleComponent] = useState("register");

    return (
        <>
            <Navbar/>
            {visibleComponent==="register" && <Register onLogin={()=>{setVisibleComponent("login")}}/>}
            {visibleComponent==="login" && <Login onRegister={()=>{setVisibleComponent("register")}}/>}
        </>
    )
}