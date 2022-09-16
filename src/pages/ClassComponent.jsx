import React from 'react';
import BaseHoc from '../hoc/BaseHoc';

//All component must have name started with capiytal letter
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Aditya",
            age: 20,
        };
        console.log("Constructor")
    };
    render() {
        console.log("Render")
        return (
            <div>
                <p>This is a class Component</p>
            </div>
        );

    };
};

export default BaseHoc(ClassComponent);