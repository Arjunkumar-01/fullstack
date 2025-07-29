import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Insert = ()=>{
    const pid = useRef(null);
    const pname = useRef(null);
    const pcost = useRef(null);
    const pimage = useRef(null);
    const discount = useRef(null);
    const navigate = useNavigate();
    const insert_laptop = async ()=>{
        const res = await axios.post("http://localhost:9090/laptops",{
            pid: parseInt(pid.current.value),
            pname: pname.current.value,
            pcost: parseFloat(pcost.current.value),
            pimage: pimage.current.value,
            discount: parseFloat(discount.current.value)
        });
        const {data} = res;
        const {message} = data;
        console.log(message);
        if(message === "Laptop Added Successfully"){
            navigate("/");
        }
        else{
            alert("Laptop Not Inserted");
        }
    };
    return(
        <>
            <h1 align="center">Insert Laptop Record</h1>
            <input type="number" placeholder="Enter Product ID" ref={pid} style={{marginBottom:20}}/>  <br></br>
            <input type="text" placeholder="Enter Product Name" ref={pname} style={{marginBottom:20}}/> <br></br>
            <input type="number" placeholder="Enter Product Cost" ref={pcost} style={{marginBottom:20}}/> <br></br>
            <input type="text" placeholder="Enter Product Image" ref={pimage} style={{marginBottom:20}}/> <br></br>
            <input type="number" placeholder="Enter Discount" ref={discount} style={{marginBottom:20}}/> <br></br>
            <button onClick={insert_laptop}>Insert Record</button>
        </>
    )
}
export default Insert;