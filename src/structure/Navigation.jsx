import React from "react"
import HomePage from "../pages/Homepage & LogIn/HomePage"
import MenuWrapper from "../pages/Menu page/MenuWrapper"
import SignIn  from "../pages/Homepage & LogIn/SignIn"
import AdminPage from "../pages/admin/AdminPage"
import DishPage from "../pages/Menu page/Dish Page/DishPage"
import AdminMenuPage from "../pages/admin/admin-menu-page/AdminMenuPage"


export const navList = [
    { path:     "/",         name: "Home",        element: <HomePage/>,       isMenu: true,     isPrivate: false  },
    { path:     "/signIn",    name: "Sign In",  element: <SignIn/>,      isMenu: false,    isPrivate: false  },
    // { path:     "/",    name: "Offers",  element: <Offers/>,      isMenu: true,    isPrivate: false  },
    // { path:     "/cart",    name: "Cart",  element: <Cart/>,      isMenu: true,    isPrivate: true  } ,
    //{ path:     "/menu",    name: "Menu",  element: <MenuWrapper/>,    isMenu: false,    isPrivate: false  }  ,
    { path:     "/menu/:id",    name: "DishDetail",  element: <DishPage/>,    isMenu: false,    isPrivate: false},
    { path:     "/admin",    name: "Admin",  element: <AdminPage/>,    isMenu: true,    isPrivate: true}  ,
    { path:     "",    name: "Admin",  element: <AdminMenuPage/>,    isMenu: false,    isPrivate: true}  ,
    

]