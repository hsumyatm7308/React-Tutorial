import React from "react";
import { ReactDOM } from "react-client";

const myarray = ["apple","orange","grapes"];

const arrmap = myarray.map((item)=>{
        <p>{item}</p>
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(arrmap);