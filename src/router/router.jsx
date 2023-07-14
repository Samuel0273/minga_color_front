import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotAllow from "../pages/NotAllow";
import Index from "../pages/Index";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Page from "../pages/Page";
import ProtectedRouteUser from "./protectedUser";
import ProtectedRouteNotUser from "./protectedNotUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[ //te hace una red y te toma lo que tiene abajo
    {
        path: "/home",
        element: <Index/>
    },
    {
        path: "*",
        element: <NotAllow/>
    },
    {
        path: "/register",
        element: 
        <ProtectedRouteUser>
            <Register/>
        </ProtectedRouteUser>
        
    },
    {
        path: "/signin",
        element: <SignIn/>
    },
    {
        path: "/chapter/:id/:page",
        element: 
        <ProtectedRouteNotUser>
            <Page/>
        </ProtectedRouteNotUser>
    }
]
}
])

export default router