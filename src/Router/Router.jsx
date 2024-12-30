import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import OurShop from "../Pages/OurShop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/our-menu',
                element: <OurMenu />
            },
            {
                path: '/our-shop',
                element: <OurShop />
            }
        ]
    }
])

export default router