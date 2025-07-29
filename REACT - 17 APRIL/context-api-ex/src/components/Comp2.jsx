import Global1 from "../context/Global1";
import { useContext } from "react";
import Global2 from "../context/Global2";
import Global3 from "../context/Global3";

const Comp2 = ()=>{

    const data = useContext(Global1);
    const data1 = useContext(Global2);
    const obj = useContext(Global3);

    return(
        <>
            <h1>Component 2</h1>
            <h2>{data}</h2>
            <h2>{data1}</h2>
            <p>{obj.react}</p>
            <p>{obj.mongodb}</p>
            <p>{obj.Mern}</p>
        </>
    )
}

export default Comp2;