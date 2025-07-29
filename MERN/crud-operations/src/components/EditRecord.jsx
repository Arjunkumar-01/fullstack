import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const EditRecord = ()=>{

    const location = useLocation();
    const laptop = location.state;
    const {pid, pname, pcost, pimage, discount, gst, tax, invoice} = laptop;
    console.log(pid, pname, pcost, pimage, discount, gst, tax, invoice);

    const pidRef = useRef();
    const pnameRef = useRef();
    const pcostRef = useRef();
    const pimageRef = useRef();
    const discountRef = useRef();
    const gstRef = useRef();
    const taxRef = useRef();
    const invoiceRef = useRef();

    const navigate = useNavigate();
    
    const handle_submit = async (event)=>{
        event.preventDefault();
        const updated_object = {
            pid: parseInt(pidRef.current.value),
            pname: pnameRef.current.value,
            pcost: parseFloat(pcostRef.current.value),
            pimage: pimageRef.current.value,
            discount: parseFloat(discountRef.current.value),
            gst: parseFloat(gstRef.current.value),
            tax: parseFloat(taxRef.current.value),
            invoice: parseFloat(invoiceRef.current.value)
        };

        const res = await axios.put("http://localhost:9090/laptops", updated_object)
        const {data} = res;
        const {message} = data;
        message == "Laptop Updated Successfully" ? navigate("/") : alert("Laptop not updated");  
    }

    return(
        <>
            <form onSubmit={handle_submit}>

                <input type="number" value={pid} ref={pidRef} readOnly></input> <br />
                <input type="text" defaultValue={pname} ref={pnameRef} /> <br />
                <input type="number" defaultValue={pcost} ref={pcostRef} /> <br />
                <input type="text" defaultValue={pimage} ref={pimageRef} /> <br />
                <input type="number" defaultValue={discount} ref={discountRef} /> <br />
                <input type="number" defaultValue={gst} ref={gstRef} /> <br />
                <input type="number" defaultValue={tax} ref={taxRef} /> <br />
                <input type="number" defaultValue={invoice} ref={invoiceRef} /> <br />
                <input type="submit" value={"Update Record"} style={{marginRight:20, backgroundColor:"green", color:"white"}}></input>
            </form>
        </>
    )
}

export default EditRecord;