import React from "react";
import ReactDOM from "react-dom";
// import ArrayMap from "./arraymap"; // Import the component

// const App = () => (
//   <div>
//     <h1>My App</h1>
//     <ArrayMap /> {/* Use the imported component */}
//   </div>
// );


const myarray = ['apple','orange','water melon'];

const arrymap = myarray.map((item)=>{

    <p>{item}</p>
    
});

ReactDOM.render(<App />, document.getElementById("root"));
