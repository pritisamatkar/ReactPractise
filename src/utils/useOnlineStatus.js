import { useEffect, useState } from "react";

// useOnlineStatus custom hook to display if user is online
const useOnlineStatus = () =>{
    const [ onlineStatus, setOnlineStatus]= useState(true);
    // check if online
    useEffect ( () =>{
        
        window.addEventListener( "offline", (event) =>{
            setOnlineStatus(false);
        });
        window.addEventListener( "online", (event) =>{
            setOnlineStatus(true);
        })
    },[]);
    //boolean value
    return onlineStatus;

}

export default useOnlineStatus;