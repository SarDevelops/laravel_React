import { createBrowserRouter } from "react-router-dom";
import Home from "./assets/views/home";
import ContactUS from "./assets/views/contact_us";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
// import InfoPage from "./assets/views/info_page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact-us',
                element: <ContactUS />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />
    },
    {
        path: '/home',
        element: <Home />
    },

])

export default router;
