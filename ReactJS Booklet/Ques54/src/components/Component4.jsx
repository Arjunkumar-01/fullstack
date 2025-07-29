import { Link, Outlet } from "react-router-dom";

const Component4 = ()=>{
    return(
        <>
            <h1>Component 4 !!!</h1>

            <Link to="comp1/comp4/comp8" style={{marginRight:200}}>
                <b>Component 8</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Component4;