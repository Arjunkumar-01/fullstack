import { Component } from 'react';
import Child1 from './Child1.jsx';

class Parent1 extends Component {
    constructor() {
        super();
        this.state = {
            "num" : 100
        };
    }

    render() {
        console.log("Parent1");
        return(
            <>
                <Child1 num={this.state.num}></Child1>
            </>
        )
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                "num" : this.state.num
            });
        }, 1000)
    }
}

export default Parent1;