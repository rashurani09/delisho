
import AmountWiseList from "./AmountWiseOrderList";
import OrderTable from "./OrderTable";
import TimeWiseOrderList from "./TimeWiseOrderList";
import TopDishList from "./TopDishList";
import { TranslateFunction } from "../../../util/internationalization";


export default function AdminOrderPage(){
  const heading = TranslateFunction("label");
   return(
    <div style={{backgroundColor : '#EAE4E6' , paddingBottom: '50px'}}>
      <h1 style={{color:'navy', fontSize: "36px" , fontWeight : 'bold' , textAlign : 'center' , paddingTop : '24px'}}>{heading("Orders")}</h1>
    <div style={{display  : 'flex' , flexDirection : 'column' , }}>
    <TopDishList/>
    <TimeWiseOrderList/>
    <AmountWiseList/>
    <OrderTable/>
    </div>
    </div>
    
   ) 
}