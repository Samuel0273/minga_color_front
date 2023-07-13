import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import NotAllow from "../pages/NotAllow";
import Index from "../pages";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

import Mangas from "../pages/Mangas"

import MangaFormContainer from "../pages/MangaForm"


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
        path: "/register",
        element: <Register/>
    },
    {
        path: "/signin",
        element: <SignIn/>

    },
    {   
        path: "/mangas",
        element: <Mangas/>

    },
  {
    path: "/manga-form",
    element: <MangaFormContainer />,
  },

])

export default router