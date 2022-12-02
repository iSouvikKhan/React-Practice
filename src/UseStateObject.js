import { useEffect, useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        age: 28,
        name: 'Sanjeevan',
        message: 'BlockChain is future'
    });
    const [name, setName] = useState('Navin Reddy');
    const [age, setAge] = useState(34);
    const [message, setMessage] = useState('BlockChain is my fav tech');

    const changeMessage = () => {
        // setPerson({...person, message:'Blockchain is easy'});
        setMessage('BlockChain is Best and Future');
    }
    return (
        <>
            {/* <h3>{person.name}</h3>
         <h3>{person.age}</h3>
         <h3>{person.message}</h3> */}
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className='btn' onClick={changeMessage}>Change Mesage</button>
        </>
    )
}
export default UseStateObject;