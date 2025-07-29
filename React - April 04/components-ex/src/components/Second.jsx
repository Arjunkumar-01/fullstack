import { Component } from "react";

class Second extends Component {

    constructor() {
        super();
        this.state = {
            "msg" : "Hello from Second Component",
            "arr" : [10,20,30,40,50],
            "num" : 0,
            "bool" : true,
            "object" : {"Frontend":"ReactJS", "Backend":"NodeJS", "Database":"MongoDB"},
            "listOfObjects" : [ {"p_id":111, "p_name":"shirt_1", "p_cost":1000},
                                {"p_id":222, "p_name":"shirt_2", "p_cost":2000},
                                {"p_id":333, "p_name":"shirt_3", "p_cost":3000}, 
                                {"p_id":444, "p_name":"shirt_4", "p_cost":4000}, 
                                {"p_id":555, "p_name":"shirt_5", "p_cost":5000} ]
        };
    }

    incr = ()=>{
        this.setState({
            "num" : this.state.num + 10
        });
    }

    decre = ()=>{
        this.setState({
            "num" : this.state.num - 1
        });
    }

    render() {
        return(
            <>
                <p>{this.state.msg}</p>

                {
                    this.state.arr.map((element, index)=>{
                        return(<p key={index}>{element}</p>)
                    })
                }

                <p>{this.state.num}</p>

                
                { /*

                { this.state.bool? <p>True</p> : <p>False</p>}

                <p>{this.state.object.Frontend}</p>
                <p>{this.state.object.Backend}</p>
                <p>{this.state.object.Database}</p>

                <table border={1}
                       align="center"
                       cellPadding={20}
                       cellSpacing={20}>
                            <thead>
                                <tr>
                                    <th>p_id</th>
                                    <th>p_name</th>
                                    <th>p_cost</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listOfObjects.map((element, index)=>{
                                        return(<tr key={index}>
                                            <td>{element.p_id}</td>
                                            <td>{element.p_name}</td>
                                            <td>{element.p_cost}</td>   
                                        </tr>)
                                    })
                                }
                            </tbody>

                            <tfoot></tfoot>
                       </table>
                    */}

                       <button onClick={this.incr}>Incre</button>

                        <br /><br />

                       <button onClick={this.decre}>Decre</button>
            </>
        )
    }
}

export default Second;