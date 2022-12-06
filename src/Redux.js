import React, { useState } from "react";

const GrandChild = (props) => {
    return (
        <>
            <h3>Grand Child Component : </h3>
            <Child course={props.course} />
        </>
    );
}

const Child = (props) => {
    return (
        <>
            <h2>Child Component : {props.course}</h2>
        </>
    );
}

const Redux = () => {

    const [courseName, setCourseName] = useState("React.js");

    return (
        <>
            <h1>iNeuron : </h1>
            <GrandChild course={courseName} />
        </>
    );
}

export default Redux;