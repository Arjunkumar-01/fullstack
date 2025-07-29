import { Link, Outlet } from "react-router-dom";

const Component6 = ()=>{
    return(
        <>
            <h1>Component 6 !!!</h1>

            <Link to="comp2/comp6/comp10" style={{marginRight:200}}>
                <b>Component10</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Component6;