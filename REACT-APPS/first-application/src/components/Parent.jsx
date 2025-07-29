import Child from './Child';
import React, { useState } from 'react';

const Parent = ()=>{

    // number
    const [num1, setNum1] = useState(100);

    // string
    const [str, setStr] = useState("ARJUNKUMAR");

    // boolean
    const [bool, setBool] = useState(true);

    // object
    const [obj, setObj] = useState( {name:"John", age:30, salary:20000} );

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
        <React.Fragment>
            <Child num1 = {num1}
                   str = {str}
                   bool = {bool}
                   obj = {obj}
                   products = {products}>
                   </Child>
        </React.Fragment>
    )
}

export default Parent;