import  { Component } from 'react';

class Child extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <p>{this.props.name}</p>
                
                {
                    this.props.flag ? <p>FNS !!!</p> : <p>React !!!</p>
                }

                {
                    !this.props.flag ? <p>FNS !!!</p> : <p>React !!!</p>
                }

                <p>{this.props.num}</p>
            </>
        )
    }
}

export default Child;