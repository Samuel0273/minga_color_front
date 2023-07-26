import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotAllow from "../pages/NotAllow";
import Index from "../pages/Index";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Page from "../pages/Page";
import ProtectedRouteUser from "./protectedUser";
import ProtectedRouteNotUser from "./protectedNotUser";

import Mangas from "../pages/Mangas"
import MangaFormContainer from "../pages/MangaForm"
import MangasMe from "../components/MangasMe";

import Donations from "../pages/Donation";

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
        path: "/home",
        element: <Index/>
    },
    {
        path: "/donations",
        element: <Donations/>
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
    },
    {   
        path: "/mangas",
        element:
        <ProtectedRouteNotUser>
          <Mangas/>
        </ProtectedRouteNotUser>
    },
  {
    path: "/manga-form",
    element: <MangaFormContainer />,
  },
  {
    path: "/mangas/me",
    element: 
    <ProtectedRouteNotUser>
        <MangasMe />
    </ProtectedRouteNotUser>
  },
]}
])

export default router