import React from 'react';

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myList);