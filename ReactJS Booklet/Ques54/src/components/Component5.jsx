import { Link, Outlet } from "react-router-dom";

const Component5 = ()=>{
    return(
        <>
            <h1>Component 5 !!!</h1>

            <Link to="comp2/comp5/comp9" style={{marginRight:200}}>
                <b>Component9</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Component5;