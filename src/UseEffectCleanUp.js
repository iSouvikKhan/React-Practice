import { useState, useEffect } from 'react';

const UseEffectCleanUp = () => {
    const [size, setSize] = useState(window.innerWidth);
    const reSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        console.log('event is trigered');
        window.addEventListener('resize', reSize) // eventListener is added
        // return (
        //     window.removeEventListener('resize', reSize) // eventListener is removed
        // )
    })


    console.log('rendering');
    return <>
        <h2>Screen Size</h2>
        <h3>{size} PX</h3>
    </>
}
export default UseEffectCleanUp;