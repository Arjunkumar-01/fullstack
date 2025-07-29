import Child from './Child';

const SubChild = (props) => {
    return(
        <>
            <p>{props.key1}</p>
            <p>{props.key2}</p>
            {props.key3 ? <p>True</p> : <p>False</p>}
            {
                props.key4.map((element, index)=>{
                    return(<p key={index}>{element}</p>)
                })
            }
            <p>{props.key5.k1}</p>
            <p>{props.key5.k2}</p>
            <p>{props.key5.k3}</p>
            
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                        <thead>
                            <tr>
                                <th>p_id</th>
                                <th>p_name</th>
                                <th>p_cost</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                props.key6.map((element, index)=>{
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
        </>
    )
}

export default SubChild;