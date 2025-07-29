const Child = (props)=>{
    return(
        <>
            <p>{props.num1}</p>
            <p>{props.str}</p>

            {
                props.bool ? <p>{props.num1}</p> : <p>{props.str}</p>
            }

            {
                !props.bool ? <p>{props.num1}</p> : <p>{props.str}</p>
            }

            <p>{props.obj.name}</p>
            <p>{props.obj.age}</p>
            <p>{props.obj.salary}</p>

            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Brand</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                props.products.map((element, index)=>{
                                    return(<tr key={index}>
                                        <td>{element.name}</td>
                                        <td>{element.price}</td>
                                        <td>{element.brand}</td>
                                    </tr>)
                                })
                            }
                        </tbody>

                        <tfoot></tfoot>
            </table>
        </>
    )
}

export default Child;