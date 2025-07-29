import { Link, Outlet } from "react-router-dom";

const Component2 = ()=>{
    return(
        <>
            <h1>Component 2 !!!</h1>

            <Link to="comp2/comp5" style={{marginRight:200}}>
                <b>Component 5</b>
            </Link>

            <Link to="comp2/comp6" style={{marginRight:200}}>
                <b>Component 6</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Component2;