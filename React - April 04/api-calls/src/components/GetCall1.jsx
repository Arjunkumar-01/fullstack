import axios from 'axios';
import { useState, useEffect } from 'react';

const GetCall1 = ()=>{

    const [emps,setEmps] = useState([]);

    const get_customers = async ()=>{
        const res = await axios.get("https://www.w3schools.com/angular/customers.php");
        const {data} = res;
        const {records} = data;
        setEmps(records);
    };

    useEffect(()=>{
        get_customers();
    },[]);

    return(
        <>
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>City</th>
                                <th>Country</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                emps.map((element, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{element.Name}</td>
                                            <td>{element.City}</td>
                                            <td>{element.Country}</td>
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

export default GetCall1;