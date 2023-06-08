import React from 'react';
import ReactDOM from 'react-dom/client';

//jsx
const heading = (<h1 className='heading'> Hello world</h1>);

//standard React functional component

const HeadingComponent1 = () => {
    return <h1>Hello from functional component!!</h1>;
}

//this is also React functional component 
const HeadingComponent2 = () => <h1 className='functional'> hello from functional component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);