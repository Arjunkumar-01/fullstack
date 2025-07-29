import { useState } from "react";

const ArrayObjects = ()=>{
    const [arr1, setArr1] = useState( [{"p_id":111,"p_name":"p_one","p_cost":10000},
                                       {"p_id":222,"p_name":"p_two","p_cost":20000},
                                       {"p_id":333,"p_name":"p_three","p_cost":30000},
                                       {"p_id":444,"p_name":"p_four","p_cost":40000},
                                       {"p_id":555,"p_name":"p_five","p_cost":50000}] );

    return(
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
                    arr1.map((element, index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.p_id}</td>
                                <td>{element.p_name}</td>
                                <td>{element.p_cost}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

            <tfoot></tfoot>

        </table>
    )
}

export default ArrayObjects;