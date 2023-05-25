import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Body from './src/components/Body';
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
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