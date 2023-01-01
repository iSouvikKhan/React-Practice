import React, { useState } from 'react'
import { data } from './data'


const PropDrilling = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople(() => {
            return people.filter((person) => person.id !== id)
        })
    }
    return <section>
        <h3>Prop drilling</h3>
        <List people2={people} removePerson2={removePerson} />

    </section>
}


const List = ({ people2, removePerson2 }) => {
    return <>
        {
            people2.map((person) => {
                return (
                    <SinglePerson key={person.id} {...person} removePerson3={removePerson2} />
                )
            })
        }
    </>
}


const SinglePerson = ({ id, name, removePerson3 }) => {
    return <div className='item'>
        <h4>
            {name}
        </h4>
        <button onClick={() => removePerson3(id)}>Remove Person</button>

    </div>

}

export default PropDrilling;