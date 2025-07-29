import { Link, Outlet  } from "react-router-dom";

const Component3 = ()=>{
    return(
        <>
            <h1>Component 3 !!!</h1>

            <Link to="comp1/comp3/comp7" style={{marginRight:200}}>
                <b> Component 7</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Component3;