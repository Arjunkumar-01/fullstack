import axios from 'axios';
import { useState, useRef } from 'react'; 

const GetCall2 = ()=>{

    const [customers, setCustomers] = useState([]);
    const ref1 = useRef();

    const get_customers = async ()=>{
        const res = await axios.get(`https://reqres.in/api/users?page=${ref1.current.value}`);
        const {data:x} = res;
        const {data} = x;
        setCustomers(data);
    }

    const click_me = ()=>{
        get_customers();
    }


    return(
        <>
        <input type="number" ref={ref1} placeholder='Enter Group Id'></input>
        <button onClick={click_me}>Load Data</button>
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Avatar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                customers.map((element, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{element.id}</td>
                                            <td>{element.first_name}</td>
                                            <td>{element.last_name}</td>
                                            <td>{element.email}</td>
                                            <td><img src={element.avatar} alt="error" width={100} height={100}></img></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                        <tfoot></tfoot>
                   </table>
        </>
    )
}

export default GetCall2;