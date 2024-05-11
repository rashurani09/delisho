import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import  SignIn  from "../pages/Homepage & LogIn/SignIn";
import { AuthData } from "./AuthWrapper";
import { navList } from "./Navigation";


export const isAuthorisedRoute = (user, r, isMenu) => {
     let allowed = false
     if (!r.isPrivate)
          allowed = true
     else if (r.isPrivate && user.isAuthenticated) {
          if (r.permissions) {
               r.permissions.forEach((permission) => {
                    if (user.permissions?.includes(permission)) {
                         allowed = true
                         return
                    }
               })
          }else
               allowed = true
     }
     if(isMenu && !r.isMenu)
          allowed=false
     return allowed
}


export const RenderRoutes = () => {


     const { user } = AuthData();
     const location = useLocation();


     return (
          <Routes>
               {navList.map((r, i) => {
                    if(isAuthorisedRoute(user, r))
                         return <Route key={i} path={r.path} element={r.element} />
               })}


               {!user.isAuthenticated && <Route path="/login" element={<SignIn />} />}


               {!user.isAuthenticated && <Route path="*" element={<Navigate to="/login" replace state={{ from: location }} />} />}
               {user.isAuthenticated && <Route path="*" element={<Navigate to="/" replace />} />}


          </Routes>
     )
}


