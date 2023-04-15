import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "@/firebase";
import { database } from "@/firebase";
import { onValue, ref as ref_database } from "@firebase/database";
import { notification } from "antd";


const AuthContext = React.createContext({
    userId: "",
    userData: "",
    isAuthenticated: "",
    updateAuthenticationStatus: (isUserAuthenticated)=>{},
    isLoading: "",
    startLoading: ()=>{},
    stopLoading: ()=>{},
    logout: ()=>{},
    updateUserProfile: ()=>{},
});

export const AuthContextProvider = (props)=>{
    const [userId, setUserId] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = ()=>{
        setIsLoading(true);
    }
    const stopLoading = ()=>{
        setIsLoading(false);
    }
    
    const updateAuthenticationStatus = (isUserAuthenticated)=>{
        setIsAuthenticated(isUserAuthenticated);
    }
    const updateUserData = (userData)=>{
        setUserData(userData);
    }
    const updateUserProfile = (dataType, data)=>{
        setUserData((prevUserData)=>({...prevUserData, [dataType]: data}));
    }
    const logout = ()=>{
        signOut(auth);
    }

    

    useEffect(()=>{
        onAuthStateChanged(auth, async (user)=>{
            if(user){
                console.log(user);
                startLoading();
                const userId = user.email && user.email.split("@")[0].replace(/[.+-]/g, "_");
                setUserId(userId);
                notification['success']({
                    message: `Logged in as ${userId}`,
                    duration: 2
                })
            }
            else{
                setUserId(null);
                setIsAuthenticated(false);
            }
        })
    }, [auth])

    useEffect(()=>{
        if(userId){
            onValue(ref_database(database, 'ecofirst/users/' + userId + '/profiles/'), (snapshot) => {
                const userDetails = (snapshot.val() && snapshot.val()) || null;
                console.log(userDetails);
                if(userDetails && userDetails.isVerified === true){
                    setUserData(userDetails);
                    setIsAuthenticated(true);
                    stopLoading();
                }
            }, {
                onlyOnce: true
            });
        }
    }, [userId])
    

    const authContext = {
        userId: userId,
        userData, userData,
        isAuthenticated: isAuthenticated,
        updateAuthenticationStatus: updateAuthenticationStatus,
        updateUserData: updateUserData,
        logout: logout,
        isLoading: isLoading,
        startLoading: startLoading,
        stopLoading: stopLoading,
        updateUserProfile: updateUserProfile,
    }

    return <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
}

export default AuthContext;