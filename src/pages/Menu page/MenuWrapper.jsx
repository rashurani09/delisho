import { useState } from "react";
import { DishContainer } from "./Dish Page/DishContainer";
import MenuContainer from "./Menu Level1/MenuContainer";
import { Link } from "react-router-dom";



const UI = {
    MenuContainer: 'MenuContainer',
    DishList: 'DishList'
}
const MenuWrapper = ()=>{
    const [ui,setUI]= useState(UI.MenuContainer)
    const[selectedDish,setSelectedDish] = useState(null)
    return(
        <>
  
        {ui === UI.MenuContainer && <MenuContainer next={()=>{
            setUI(UI.DishList)
        }} setSelectedDish={setSelectedDish}/>}
        {ui === UI.DishList && <DishContainer back={()=> setUI(UI.MenuContainer)} selectedDish={selectedDish}/>}
        
        </>
    )
}

export default MenuWrapper