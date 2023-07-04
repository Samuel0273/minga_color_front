import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import NotAllow from "../pages/NotAllow";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <App/>
    },
    {
        path: "*",
        element: <NotAllow/>
    },
    {
        path: "/login"
    }
])

export default router