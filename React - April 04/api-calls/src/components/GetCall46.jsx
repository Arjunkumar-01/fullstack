import axios from 'axios';
import { useEffect, useState } from 'react';

const GetCall46 = ()=>{

    const [data,setData] = useState([]); 

    const get_products = async ()=>{
        const res = await axios.get("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0");
        const {data} = res;
        const {dataseries} = data;
        setData(dataseries);
    }

    useEffect(()=>{
        get_products();
    },[]);

    return(
        <>
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                        <thead>
                            <tr>
                                <th>cloudover</th>
                                <th>lifted_index</th>
                                <th>prec_type</th>
                                <th>rh2m</th>
                                <th>seeing</th>
                                <th>temp2m</th>
                                <th>timepoint</th>
                                <th>transparency</th>
                                <th colSpan={2}>wind10m
                                    <th>speed</th>
                                    <th>direction</th>
                                </th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((element, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{element.cloudcover}</td>
                                            <td>{element.lifted_index}</td>
                                            <td>{element.prec_type}</td>
                                            <td>{element.rh2m}</td>
                                            <td>{element.seeing}</td>
                                            <td>{element.temp2m}</td>
                                            <td>{element.timepoint}</td>
                                            <td>{element.transparency}</td>
                                            <td>{element.wind10m.direction}</td>
                                            <td>{element.wind10m.speed}</td>
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

export default GetCall46;