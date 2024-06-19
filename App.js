const parent = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child"},
        React.createElement("h1",
            {},
            "Thish ishsj")),React.createElement("div",
                {id:"child"},
                React.createElement("h1",
                    {},
                    "Thish ishsj"))])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
