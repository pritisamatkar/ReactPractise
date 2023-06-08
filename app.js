import React from 'react';
import ReactDOM from 'react-dom/client';

//jsx
const heading = (<h1 className='heading'> Hello world</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);