import './index.css';

import React, { Fragment } from 'react'
// import SetUp from './ContextAPIConsumer';

import Context from './Context'
import Provider from './Provider';


const Child1 = () => {
    console.log("Child1");
    return <GrandChild1 />
}


const GrandChild1 = () => {
    console.log("GChild1");
    return <GreatGrandChild1 />
}

const GreatGrandChild1 = () => {
    console.log("GGChild1");
    return (
        <Context.Consumer>
            {Context => (
                <Fragment>
                    <h4>Actual Consuming</h4>
                    <p>Mission Name : {Context.data.mname}</p>
                    <p>Mission accepted : {Context.data.accept}</p>
                    <button onClick={Context.isMissionAccepted}>Choose to accept</button>
                </Fragment>
            )}
        </Context.Consumer>
    )
}

const App = () => {
    return (
        <div>
            <h2>Context API EX 2</h2>
            <Provider>
                <Child1 />
            </Provider>
        </div>
    )
}
export default App;
