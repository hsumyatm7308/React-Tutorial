import React from 'react';
import ReactDOM from 'react-dom/client';

const myfirstelement = <h1>Hello React!</h1>;

// ReactDOM.render(myfirstelement, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(myfirstelement);
