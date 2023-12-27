
//const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");

// console.log(heading);     // object  or ReactElement

const parent = React.createElement("div", {id:"parent", },
    [
        React.createElement("div", {id:"child1" },
        [React.createElement("h3", {id:"head"}, "I'm the grandchild"),
        React.createElement("h1", {id:"head"}, "I'm the h1 tag")]
    ),
    React.createElement("div", {id:"child2" },
        [React.createElement("h3", {id:"head"}, "I'm the grandchild"),
        React.createElement("h1", {id:"head"}, "I'm the h1 tag")]
    )
    ]
);

const parentRoot = ReactDOM.createRoot(document.getElementById("root"));

parentRoot.render(parent);