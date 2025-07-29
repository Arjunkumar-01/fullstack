import { Component, PureComponent } from 'react';

class Child1 extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Child1");
        return(
            <>
                <h1>{this.props.num}</h1>
            </>
        )
    }
}

export default Child1;