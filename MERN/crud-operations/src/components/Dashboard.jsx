import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ()=>{

    const navigate = useNavigate();
    
    const [laptops, setLaptops] = useState([]);
    const get_laptops = async ()=>{
        const res = await axios.get('http://localhost:9090/laptops');
        const {data} = res;
        setLaptops(data);
    };

    useEffect(()=>{
        get_laptops();
    },[laptops]);

    const delete_laptop = async (pid)=>{
        const res = await axios.delete("http://localhost:9090/laptops",{"data":{"pid":pid}});
        const {data} = res;
        const {message} = data;
        if(message == "Laptop Deleted Successfully"){
            console.log("Laptop Deleted Successfully");
        }else{
            console.log("Laptop not Deleted");
        }
    };

    const insert_record = ()=>{
        navigate("/insert");
    };

    const edit_record = (laptop)=>{
        navigate("/edit", {state:laptop});
    };
    return(
        <>
        <button style={{marginBottom:10,backgroundColor:"green"}} onClick={insert_record}>Insert Record</button>
            <table border={1} align="center" cellPadding={10} cellSpacing={10}>
                <thead>
                    <tr>
                        <th>pid</th>
                        <th>pname</th>
                        <th>pcost</th>
                        <th>pimage</th>
                        <th>discount(%)</th>
                        <th>gst(3%)</th>
                        <th>tax(3%)</th>
                        <th>invoice</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        laptops.map((laptop, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{laptop.pid}</td>
                                    <td>{laptop.pname}</td>
                                    <td>{laptop.pcost}</td>
                                    <td><img src={laptop.pimage} alt="Laptop" width={100} height={100}/></td>
                                    <td>{laptop.discount}</td>
                                    <td><i className="fa fa-rupee"></i> {laptop.gst}</td>
                                    <td><i className="fa fa-rupee"></i> {laptop.tax}</td>
                                    <td><i className="fa fa-rupee"></i>{laptop.invoice}</td>
                                    <td><i className="fa fa-edit" onClick={()=>edit_record(laptop)}></i></td>
                                    <td><i className='fa fa-trash' onClick={()=> delete_laptop(laptop.pid)}></i></td>
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
export default Dashboard;