import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Dashboard = ()=>{

    const navigate = useNavigate();

    const [watches, setWatches] = useState( [] );

    const get_watches = async ()=>{
        const res = await axios.get("http://localhost:6000/watches");
        setWatches(res);
    }

    useEffect(()=>{
        get_watches();
    }, []);

    const delete_watch = async (pid)=>{
        const res = await axios.delete("http://localhost:6000/watches", {"data":{"pid":parseInt(pid)}});
        const {data} = res;
        const {message} = data;
        message == "Watch Deleted Successfully !!!" ? alert("Watch Deleted Succesfully") : alert("Watch Not Deleted");
    }

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
                                watches.map((watch, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{watch.pid}</td>
                                            <td>{watch.pname}</td>
                                            <td><i className='fa fa-rupee'></i>{watch.pcost}</td>
                                            <td><img src={watch.pimage} height="50" width="50" /></td>
                                            <td>{watch.discount}</td>
                                            <td><i className='fa fa-rupee'></i>{watch.gst}</td>
                                            <td><i className='fa fa-rupee'></i>{watch.tax}</td>
                                            <td><i className='fa fa-rupee'></i>{watch.invoice}</td>
                                            <td><i className='fa fa-edit'></i></td>
                                            <td><i className='fa fa-trash' onClick={()=>delete_watch(watch.pid)}></i></td>
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
