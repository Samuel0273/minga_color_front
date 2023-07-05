import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import NotAllow from "../pages/NotAllow";
import Index from "../pages";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
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
        element: <Register/>
    },
    {
        path: "/login"
    }
]
}
])

export default router