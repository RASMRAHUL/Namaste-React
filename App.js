import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");

// console.log(heading);     // object  or ReactElement

// const parent = React.createElement("div", {id:"parent", },
//     [
//         React.createElement("div", {id:"child1" },
//         [React.createElement("h3", {id:"head"}, "I'm the grandchild"),
//         React.createElement("h1", {id:"head"}, "I'm the h1 tag")]
//     ),
//     React.createElement("div", {id:"child2" },
//         [React.createElement("h3", {id:"head"}, "I'm the grandchild"),
//         React.createElement("h1", {id:"head"}, "I'm the h1 tag")]
//     )
//     ]
// );

// CONCEPTS :

// JSX (transpiled before it reaches the Js) -> PARCEL - Babel

// JSX => Babel traspiled it to =>    React.createElement => ReactElement - JS Object => HTMLElement (render)

//const heading = React.createElement("h1", {id : "heading" }, "Namaste React 🚀");
const jsxheading = <h1 id="heading">Namaste React using jsx🚀</h1>;

// React Functional Component
const HeadingComponent = () =>{
    return <h1 className="heading">Namaste React Functional Component .</h1>
}

const parentRoot = ReactDOM.createRoot(document.getElementById("root"));

parentRoot.render(<HeadingComponent />);
