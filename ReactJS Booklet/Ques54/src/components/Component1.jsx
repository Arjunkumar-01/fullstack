import { Link, Outlet } from "react-router-dom";

const Component1 = ()=>{
    return(
        <>
            <h1>Component 1 !!!</h1>
            
            <Link to="comp1/comp3" style={{marginRight:200}}>
                <b>Component 3</b>
            </Link>

            <Link to="comp1/comp4" style={{marginRight:200}}>
                <b>Component 4</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Component1;