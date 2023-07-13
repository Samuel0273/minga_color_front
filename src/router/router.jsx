import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import NotAllow from "../pages/NotAllow";
import Index from "../pages/Index";
import SignIn from "../pages/SignIn";
import Mangas from "../pages/Mangas"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[ //te hace una red y te toma lo que tiene abajo
    {
        path: "/",
        element: <Index/>
    },
    {
        path: "*",
        element: <NotAllow/>
    },
    {
        path: "/signin",
        element: <SignIn/>
    },
    {   
        path: "/mangas",
        element: <Mangas/>

    }
]
}
])

export default router