import Home from "./views/Ui/Home/Home";
import About from "./views/Ui/About/About";
import Contact from "./views/Ui/Contact/Contact";
import SignUp from "./views/Ui/SignUp/SignUp";
import WhyJoin from "./views/Ui/WhyJoin/WhyJoin";



const routes = [

    { path: "/", element: <Home />,},
    { path: "/about", element: <About />,},
    { path: "/contact", element: <Contact />,},
    { path: "/signUp", element: <SignUp />,},
    { path: "/whyJoin", element: <WhyJoin />,},  
];

export default routes;