import { useState } from "react";

const List = () => {
    const [arr, setArr] = useState(["Angular", "React", "Node", "VueJS", "MongoDB", "Mern Stack"]);

        return(
            <>
                <table border={1}
                       align="center">
                            <thead>
                                <tr>
                                    <th>SNO</th>
                                    <th>Value</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    arr.map((element, index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td>{element}</td>
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

export default List;