import { database } from "@/firebase";
import { onValue, ref as ref_database, update } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import AuthContext from "@/store/AuthContext";

export default function ViewRequest(){
    const [pendingRequests, setPendingRequests] = useState([]);
    const [accepted, setAccepted] = useState(false);
    const authCtx = useContext(AuthContext);

    useEffect(()=>{
        onValue(ref_database(database, 'ecofirst/garbages') , (snapshot)=>{
            if(snapshot){
                let pendingRequestsArray = [];
                const requests = snapshot.val();
                for(let request in requests){
                    if(requests[request].accepted === false){
                        pendingRequestsArray.push({...requests[request], requestId: request});
                    }
                }
                setPendingRequests(pendingRequestsArray);
                setAccepted(!accepted);
            }
        }, {
            onlyOnce: true
        });
    }, [accepted])

    const handleAcceptRequest = (requestId, userId)=>{
        update(ref_database(database, 'ecofirst/garbages/' + requestId), {
            accepted: true,
            orderTaken: userId
        }).then((res) => {
            console.log("order accepted");
        })
        .catch((err) => {
            console.log(err);
            // console.log("User Registration failed...");
        });
    }

    return (
        <div className={styles.profileContainer}>
            <h2 className={styles.pendingHeading}>Pending Garbage Orders</h2>
            <div>
                {pendingRequests && pendingRequests.length>0 && pendingRequests.map((pendingRequest)=>{
                        // console.log(pendingRequest);
                        return (
                            <div className={styles.pendingRequestContainer}>
                                <div>Order ID: {pendingRequest.requestId}</div>
                                <div>Order By: {pendingRequest.userId}</div>
                                <div>Name: {pendingRequest.name}</div>
                                <div>Phone: {pendingRequest.phone}</div>
                                <div>Address: {pendingRequest.address}</div>
                                <div className={styles.acceptPendingButton} onClick={()=>{handleAcceptRequest( pendingRequest.requestId, authCtx.userId)}}>Accept</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}