import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{

    const navigate = useNavigate();

    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const loginfn = ()=>{
        ref1.current.value == "FNS" && ref2.current.value == "FNS@123" ? navigate("/dashboard") : navigate("/error");
    }

    return(
        <>
            <input type="text" ref={ref1} placeholder="Username" /> <br /><br />
            <input type="password" ref={ref2} placeholder="Password" /> <br /><br />
            <button onClick={loginfn}>Login</button>
        </>
    )
}

export default Login;