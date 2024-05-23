import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultlayout";
import Home from "../componets/home";
import Routes from "../componets/routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/routes",
                element: <Routes />,
            },
            {
                path: "/hookes",
                element: <div>Hookes</div>,
            },
            {
                path: "/redux",
                element: <div>Redux</div>,
            },
            {
                path: "/api",
                element: <div>Api</div>,
            },
        ],
        errorElement: <div>404 Error!</div>,
    },
]);

export default router;