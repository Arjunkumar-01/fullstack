import { Component } from 'react';
import Child from './Child.jsx';

class Parent extends Component {

    constructor() {
        super();
        this.state = {
            "name" : "FNS !!!",
            "flag" : true,
            "num" : 100,
            "list" : [10,20,30,40,50]
        };
    }

    render() {
        return(
            <>
                <Child name={this.state.name}
                       flag={this.state.flag}
                       num={this.state.num}
                       list={this.state.list}></Child>
            </>
         )
    }
}

export default Parent;