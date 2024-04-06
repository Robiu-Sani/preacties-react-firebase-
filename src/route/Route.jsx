import { createBrowserRouter } from "react-router-dom";
import About from "../components/about/About";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Root from "../components/Root";
import Error from "../error/Error";


const route = createBrowserRouter([
    {
        path: '/',
        element : <Root></Root>,
        errorElement: <Error></Error>,
        children : [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path : '/blog',
                element: <Blog></Blog>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registrations',
                element : <Registration></Registration>
            }
        ]
    }
]);

export default route