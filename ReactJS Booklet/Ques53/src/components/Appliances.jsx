import { Link, Outlet } from "react-router-dom";

const Appliances = ()=>{
    return(
        <>
            <h1>Appliances soon...!!!</h1>
            
            <Link to="appliances/fridge" style={{marginRight:200}}>
                <b>Fridge</b>
            </Link>

            <Link to="appliances/washing" style={{marginRight:200}}>
                <b>Washing Machine</b>
            </Link>

            <Link to="appliances/ac" style={{marginRight:200}}>
                <b>AC</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Appliances;