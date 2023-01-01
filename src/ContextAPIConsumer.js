import React, { useState } from "react";

const GrandChild = (props) => {
    return (
        <>
            <h3>Grand Child Component : </h3>
            <Child course2={props.course1} />
        </>
    );
}

const Child = (props) => {
    return (
        <>
            <h2>Child Component : {props.course2}</h2>
        </>
    );
}

const ContextAPIConsumer = () => {

    const [courseName, setCourseName] = useState("React.js");

    return (
        <>
            <h1>iNeuron : </h1>
            <GrandChild course1={courseName} />
        </>
    );
}

export default ContextAPIConsumer;