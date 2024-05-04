import { useEffect, useState } from "react";
import MultiStepRouter from "../user/user-table-reservation/UserTableReservation";
import { getData} from "./../../services/TableBooking";
import AdminSeatingsPage from "../admin/admin-seating-page/AdminSeatingsPage";

export default function TableReservation(){
    const [data , setData] = useState(null);
    const [ui , setUi] = useState("user");
   const UI = {
    admin : "admin",
    user : "user"
   }

  useEffect(()=>{
    getData().then(list =>{
        setData(list)
    })
  },[])

    return(
        <>
       
        {data && ui === UI.user && <MultiStepRouter data={data} />}

        </>
    )
}