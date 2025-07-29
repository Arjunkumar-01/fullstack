import { useState } from 'react';
import Dashboard from './Dashboard';
import Error from './Error';

const State = ()=>{
    
    // number
    const [num1,setNum1] = useState(1000);
    const [num2,setNum2] = useState(500);

    // boolean
    const [bool, setBool] = useState(true);

    // objects
    const [emp,setEmp] = useState( {"name":"John", "age":30, "salary":50000} );
    const [product, setProduct]  = useState( {"name":"Laptop", price:60000, brand:"Dell"} );
    const {name, price, brand} = product;

    // list
    const [nums1, setNums1] = useState( [1,2,3,4,5] );
    const [nums, setNums] = useState( [6,7,8,9,10] );
    const [strs, setStrs] = useState( ["Hello", "World", "React"] );

    // list of objects
    const [products, setProduts] = useState( [  {name:"Laptop", price:50000, brand:"Dell"},
                                                {name:"Mobile", price:20000, brand:"Samsung"},
                                                {name:"Tablet", price:30000, brand:"Apple"},
                                                {name:"Watch", price:10000, brand:"Fossil"},
                                                {name:"Headphone", price:5000, brand:"Sony"},
                                                {name:"Speaker", price:15000, brand:"JBL"},
                                                {name:"Monitor", price:20000, brand:"LG"},
                                                {name:"Keyboard", price:2000, brand:"LogiTechHP"},
                                                {name:"Mouse", price:1000, brand:"Dell"} ] );
 
    return(
        <>
            {
                bool ? <Dashboard></Dashboard> : <Error></Error>
            }

            <hr />
            {
                !bool ? <Dashboard></Dashboard> : <Error></Error>
            }
            

            <hr />
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
                                products.map((element, index)=>{
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

            <hr />
            {
                strs.map((element, index)=>{
                    return(<p key={index}>{element}</p>)
                })
            }
        
            <hr />
            {
                nums.map((element, index)=>{
                    return(<p key={index}>{element*200}</p>)
                })
            }

            <hr />
            {
                nums1.map((element, index)=>{
                    return(<p key={index}>{element*100}</p>)
                })
            }

            <hr />
            <p>Name: {name} <br /><br /> Price: {price} <br /><br /> Brand: {brand}</p>

            <hr />
            <p>Name: {emp.name} <br /><br /> Age: {emp.age} <br /><br /> Salary: {emp.salary}</p>

            <hr />
            {/* Addition */}
            <p>Addition: {num1+num2}</p>

            {/* * Substraction */}
            <p>Substraction: {num1-num2}</p>

            {/* Multiplication */}
            <p>Multiplication: {num1*num2}</p>

            {/* Square of num1 */}
            <p>Square of num1: {num1*num1}</p>

            {/* Cube of num2 */}
            <p>Cube of num2: {num2*num2*num2}</p>
        </>
    )
}

export default State;