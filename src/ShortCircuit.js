import React, { useState, useEffect } from 'react';

// short-circuit evaluation
// ternary operator
// forms basics
// input from form to state(useState)

const ShortCircuit = () => {

    const [text, setText] = useState('Navin Reddy'); // "" --> false , "any string" --> true
    const [isError, setIsError] = useState(false);
    const firstValue = text || ShortCircuit // "" || "ShortCircuit" --> true(ShortCircuit) , "any string" || "ShortCircuit" --> true(any string)
    const secondValue = text && 'ineuron.ai' // "" && "ineuron.ai" --> false(nothing) , "any string" && "ineuron.ai" --> true(ineuron.ai)
    return (
        <>
            {/* <h1>{firstValue}</h1>
         <h2>value : {secondValue}</h2> */}
            <h1>{text || 'ineuron.ai'}</h1>
            <button className='btn' onClick={() => setIsError(!isError)}>Toggle error</button>
            {isError && <h2>Error...</h2>}
            {isError ? (<p>Error.. block future is doubtful</p>) : (<div>
                <h2>
                    No error and Blockchain is future
                </h2>
            </div>)}
            {/* {!text && <h2>NFTs</h2>} */}
        </>
    )

}
export default ShortCircuit;