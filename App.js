import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Body from './src/components/Body';
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import Profile from "./src/components/ProfileClass";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
/* Lets build the top level component - AppComponent,
** Build our header component 
*/

const AppLayout = () => (
    <div className="app-container">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
);
//List of paths
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about", // parentPath/{path} => localhost:1234/about
                element: <About/>,
                children: [
                    {
                        path: "profile", //parentPath/{path} => localhost:1234/about/profile
                        element: <Profile/>
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            }
        ]
    },
    {
        path: "/home",
        element: <About/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

/*
"start": "npx parcel index.html",
    "build": "npx parcel build index.html",
    "test": "Jest"
*/ 