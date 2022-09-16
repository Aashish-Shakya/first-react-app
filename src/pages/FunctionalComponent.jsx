import React, { useState } from 'react';
import BaseHoc from '../hoc/BaseHoc';

const FunctionalComponent = (props) => {
    // function FunctionalComponent({ name, age, company, setName }) {
    // function FunctionalComponent() {
    //or
    // const FunctionalComponent = () => {

    //js always place b/w declare of fun and return

    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("")
    const subtractCount = () => {
        setCount(count - 1);
    }

    const { name, age, company, setName } = props;
    return (
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count + 1)}>Click me to Add 1s</button>
            <button onClick={subtractCount}>Click me to Sbtract 1s</button>
            <h1>{count}</h1>
            {/* <p>My name is {props.name}</p> */}
            <p>My name is {name}</p>
            <p>My age is {age}</p>
            <p>My company name is {company}</p>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => setName(changeName)}>Change Name</button>

        </div>
    );
};

export default BaseHoc(FunctionalComponent);