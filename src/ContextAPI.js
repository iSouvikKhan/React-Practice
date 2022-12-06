import React, { useState, useContext } from 'react'
import { data } from './data'

//more components 
//propDrilling-- conntext api -- redux

const PersonContext = React.createContext();
//two -Provider, Consumer. Here we will only use provider

// see React documentation

const ContextAPI = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople(() => {
            return people.filter((person) => person.id !== id)
        })
    }
    return (

        // <PersonContext.Provider value="Hello all"> // using 'value' u r putting data inside it and you can use it, wherever u want

        <PersonContext.Provider value={{ removePerson }}>
            <section>
                <h3>Context API</h3>
                <List people={people} />
                {/* to stop drilling u need to remove "removePerson={removePerson}" from this place, see PropDrilling */}

            </section>
        </PersonContext.Provider>
    )
}
const List = ({ people }) => {
    return <>
        {
            people.map((person) => {
                return (
                    <SinglePerson key={person.id} {...person} />
                )
            })
        }
    </>
}
const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext)
    console.log(data);
    return (
        <div className='item'>
            <h4>
                {name}
            </h4>
            <button onClick={() => removePerson(id)}>Remove Person</button>

        </div>
    )

}

export default ContextAPI;