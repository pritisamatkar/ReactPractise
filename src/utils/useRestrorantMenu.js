import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

//custom hook
const useRestorantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    //fetchData
    useEffect( () =>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(MENU_API_URL + resId);
        const json =await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}


export default useRestorantMenu;