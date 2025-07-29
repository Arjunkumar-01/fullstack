import axios from 'axios';
import { useRef, useState } from "react";

const Login = ()=>{

    const ref1 = useRef();
    const ref2 = useRef();

    const [msg, setMsg] = useState("");

    const login_fn = async ()=>{
        const {data} = await axios.post("http://localhost:5000/login", {"username" : ref1.current.value, "password": ref2.current.value});
        const {message} = data;
        setMsg(message);
    }

    return(
        <>
            <h1>LOGIN</h1>
            <input type="text" ref={ref1} placeholder='Username'></input> <br />
            <input type="text" ref={ref2} placeholder='Password'></input> <br />
            <button onClick={login_fn}>Login</button>
            <p>{msg}</p>
        </>
    )
}

export default Login;