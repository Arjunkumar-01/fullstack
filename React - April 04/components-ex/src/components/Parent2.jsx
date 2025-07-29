import { useState } from 'react';
import Child2 from './Child2.jsx';

const Parent2 = ()=>{

    const [msg, setMsg] = useState("");
    const [num, setNum] = useState();

    const test_func = (param1, param2)=>{
            setMsg(param1);
            setNum(param2);
    }

    return(
        <>
            <Child2 test_func={test_func}></Child2>
            <h1>{msg}</h1>
            <h1>{num}</h1>
        </>
    )
}

export default Parent2; 