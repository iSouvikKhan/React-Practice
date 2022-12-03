import { useState, useEffect } from "react";

// js
// const input = document.getElementById('myText')
// const inputValue= input.value

//react
// value, onChange

const ControlledInput = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(firstName, email);

        if (firstName && email) {
            const person = { id: new Date().getTime().toString(), firstName, email } // ES6 :  when useState value(firstName) and html name(firstName) is same, in that case u may skip (firstname:firstname , email:email)
            console.log(person);
            setPeople((people) => {
                return [...people, person];
            })
            setFirstName('');
            setEmail('');
        }
        else {
            console.log("empty values");
        }
    }
    return (
        <>
            <article>
                <h2>Form</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor='firstName'>Name : </label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='email'>Email : </label>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" >Add person </button>
                </form>
                {
                    people.map((person, index) => {
                        const { id, firstName, email } = person
                        return <div key={id}>
                            <h4>{firstName}</h4>
                            <h4>{email}</h4>
                        </div>
                    })
                }
            </article>
        </>
    )
}
export default ControlledInput;


















// import { useState, useEffect } from "react";

// // js
// // const input = document.getElementById('myText')
// // const inputValue= input.value

// // react
// // value, onChange

// const ControlledInput = () => {
//     const [firstName, setFirstName] = useState('');
//     const [email, setEmail] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Hello lets check");
//     }
//     return (
//         <>
//             <article>
//                 <h2>Form</h2>
//                 <form className='form' onSubmit={handleSubmit}>
//                     <div className='form-control'>
//                         <label htmlFor='firstName'>Name : </label>
//                         <input
//                             type='text'
//                             id='firstName'
//                             name='firstName'
//                             value={firstName}
//                             onChange={(e) => setFirstName(e.target.value)}
//                         />
//                     </div>
//                     <div className='form-control'>
//                         <label htmlFor='email'>Email : </label>
//                         <input
//                             type='text'
//                             id='email'
//                             name='email'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" >Add person </button>
//                 </form>
//             </article>
//         </>
//     )
// }
// export default ControlledInput;