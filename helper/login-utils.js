import { set, ref as ref_database, update } from "firebase/database";
import { database } from "@/firebase";
import uuid from "react-uuid";

export async function registerAccount(userId, name, email, phone, address, userType){
    set(ref_database(database, 'ecofirst/users/' + userId + '/profiles'), {
        name: name,
        email: email,
        phone: phone,
        avatar: `https://firebasestorage.googleapis.com/v0/b/srijan23-original.appspot.com/o/alphabets%2F${name.trim()[0].toUpperCase()}.jpg?alt=media&token=597912f6-4edb-4756-842f-5a41b31223ba`,
        address: address,
        userType: userType,
        coins: 0
    }).then((res) => {
        console.log("User registrated successfully!");
    })
    .catch((err) => {
        console.log(err);
        // console.log("User Registration failed...");
    });
}
export async function updateProfile(userId, dataType, newData, stopLoading){
    update(ref_database(database, 'ecofirst/users/' + userId + '/profiles'), {
        [dataType]: newData
    }).then((res)=>{
        // console.log("Profile updated successfully");
        stopLoading();
    }).catch((err)=>{
        // console.log("Profile updation failed...");
    })
}
export async function requestGarbage(userId, name, phone, address){
    const orderId = uuid();
    update(ref_database(database, 'ecofirst/users/' + userId + '/requestGarbage/'+ orderId), {
        name: name,
        userId: userId,
        phone: phone,
        address: address,
        accepted: false,
    }).then((res) => {
        console.log("Garbage Order placed successfully!");
        update(ref_database(database, 'ecofirst/garbages/'+ orderId), {
            name: name,
            userId: userId,
            phone: phone,
            address: address,
            accepted: false,
        })
    })
    .catch((err) => {
        console.log(err);
        // console.log("User Registration failed...");
    });
}