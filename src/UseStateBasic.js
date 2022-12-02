import './index.css';
import React, { useState } from 'react';


// useState is function
// " use " term is used to call every hook, like a prefix
// return array([value, func])
// mandate to use hooks inside functions / components
// Component must be in UpperCase


const UseStateBasic = () => {
    let title = 'react is best';
    const [message, setMessage] = useState(title);

    const changedRes = () => {
        setMessage('React is easy Play around code');
    }
    return (
        <>
            <h2>{message}</h2>
            <button className='btn' onClick={changedRes}>Change</button>
        </>
    );
}


// Code for toggle text

// const UseStateBasic = () => {
//     let title = true;
//     const [booleanValue, setMessage] = React.useState(title);

//     const changedRes = () => {
//         setMessage(!booleanValue);
//     }
//     return (
//         <>
//             {
//                 booleanValue ? <h2>"React is easy Play around code"</h2> : <h2>"React is best"</h2>
//             }
//             <button className='btn' onClick={changedRes}>Toggle text</button>
//         </>
//     );
// }

export default UseStateBasic;