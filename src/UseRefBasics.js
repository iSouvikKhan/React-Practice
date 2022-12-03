import { useState, useEffect, useRef } from 'react';

// similar to useState as it will preserve vales between renders
// however useref doesn't triger re render --> this is the basic feature of useRef()
// mostly to target dom element

const UseRefBasics = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ref container current value');
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    }
    useEffect(() => {
        console.log(refContainer.current)
        refContainer.current.focus();
    })
    console.log(refContainer);
    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <div ref={divContainer}>hello ineuron</div>
        </>

    )
}
export default UseRefBasics;