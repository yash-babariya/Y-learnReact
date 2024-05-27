import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultlayout";
import Home from "../componets/home";
import Routes from "../componets/routes";
import LearnMore from "../componets/learn-more";
import Hooks from "../componets/hooks";
import Error from "../componets/error";

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
    },
    {
        path: "*",
        element: <Error />,
    }
]);

export default router;