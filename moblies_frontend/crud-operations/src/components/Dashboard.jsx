import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Dashboard = ()=>{

    const navigate = useNavigate();
    const [mobiles, setMobiles] = useState( [] );

    const get_mobiles = async () => {
        const {data} = await axios.get("http://localhost:5050/mobiles");
        setMobiles(data);
    };

    useEffect(()=>{
        get_mobiles();
    }, []);

    const delete_mobile = async (pid)=>{
        const res = await axios.delete("http://localhost:5050/mobiles", {"data":{"pid":parseInt(pid)}});
        const {data} = res;
        const {message} = data;
        message == "Mobile Deleted Successfully !!!" ? alert("Mobile Deleted Successfully") : alert("Mobile Not Deleted");
    };


    return(
        <>
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={0}>
                        <thead>
                            <th>pid</th>
                            <th>pname</th>
                            <th>pcost</th>
                            <th>pimage</th>
                            <th>discount</th>
                            <th>gst(3%)</th>
                            <th>tax(3%)</th>
                            <th>invoice</th>
                            <th>edit</th>
                            <th>delete</th>
                        </thead>

                        <tbody>
                            {
                                mobiles.map((mobile, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{mobile.pid}</td>
                                            <td>{mobile.pname}</td>
                                            <td><i className='fa fa-rupee'></i>{mobile.pcost}</td>
                                            <td><img src={mobile.pimage} height="50" width="50" /></td>
                                            <td>{mobile.discount}</td>
                                            <td><i className='fa fa-rupee'></i>{mobile.gst}</td>
                                            <td><i className='fa fa-rupee'></i>{mobile.tax}</td>
                                            <td><i className='fa fa-rupee'></i>{mobile.invoice}</td>
                                            <td><i className='fa fa-edit'></i></td>
                                            <td><i className='fa fa-trash' onClick={()=>delete_mobile(mobile.pid)}></i></td>
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