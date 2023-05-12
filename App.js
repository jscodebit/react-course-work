import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("h1", { id: "app-header"}, "Hello world!");

//JSX is transpiled before it reaches the JS Engine - Parcel - Babel
//JSX = > React.createElement => React element to JS Object   => HTML Element (render)
const jsxHeader = <h1 id="app-header">Hello world!</h1>
console.log(jsxHeader);
console.log(jsxHeader == header)


//React Components
//Class based Components - OLD
//Functional Components - NEW
const Title = () => (
    <h1>React functional Component</h1>
);
const Header = () => (
    <div className="container">
        <Title/>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);