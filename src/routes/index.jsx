import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultlayout";
import Home from "../componets/home";
import Routes from "../componets/routes";
import LearnMore from "../componets/learn-more";
import Hooks from "../componets/hooks";

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
                element: <Hooks />,
            },
            {
                path: "/redux",
                element: <div>Redux</div>,
            },
            {
                path: "/api",
                element: <div>Api</div>,
            },
            {
                path: "/learnMore",
                element: <LearnMore />,
            }
        ],
        errorElement: <div>404 Error!</div>,
    },
]);

export default router;