import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Body from './src/components/Body';
/* Lets build the top level component - AppComponent,
** Build our header component 
*/

const AppLayout = () => (
    <div className="app-conatiner">
        <Header/>
        <Body/>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);