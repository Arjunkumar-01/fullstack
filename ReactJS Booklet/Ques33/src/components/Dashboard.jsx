import { useState } from 'react';
import Success from './Success.jsx';
import Failure from './Failure';

const Dashboard = ()=>{

    const [status, setStatus] = useState(true);
    return(
       <>
             <h1>Dashboard</h1>

            <button onClick={()=>setStatus(!status)}>Toggle</button>

            {status ? <Success/> : <Failure/>}
       </>
    )
}

export default Dashboard;