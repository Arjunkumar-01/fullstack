import axios from 'axios';
import { useState, useEffect } from 'react';

const GetCall47 = ()=>{

    const [items,setItems] = useState([]);

    const get_items = async()=>{
        const res = await axios.get("https://reqres.in/api/unknown");
        const {data:x} = res;
        const {data} = x;
        setItems(data);
    }

    useEffect(()=>{
        get_items();
    },[]);

    return(
        <>
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                        <thead>
                            <th>color</th>
                            <th>id</th>
                            <th>name</th>
                            <th>pantone_value</th>
                            <th>year</th>
                        </thead>

                        <tbody>
                            {
                                items.map((element, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td style={{background:element.color}}>{element.color}</td>
                                            <td>{element.id}</td>
                                            <td>{element.name}</td>
                                            <td>{element.pantone_value}</td>
                                            <td>{element.year}</td>
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

export default GetCall47;