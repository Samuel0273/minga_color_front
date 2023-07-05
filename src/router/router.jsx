import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import NotAllow from "../pages/NotAllow";
import Index from "../pages/Index";
import SignIn from "../pages/SignIn";
import MangaFormContainer from "../pages/MangaForm"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
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
    }]
},
{
    path: "/manga-form",
    element: <MangaFormContainer />,
},
])

export default router