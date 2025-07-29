import { Outlet, Link } from "react-router-dom";

const Electronics = ()=> {
    return(
        <>
            <h1>Electronics soon...!!!</h1>

            <Link to="electronics/laptop" style={{marginRight:200}}>
                <b>Laptop</b>
            </Link>

            <Link to="electronics/mobile" style={{marginRight:200}}>
                <b>Mobile</b>
            </Link>

            <Link to="electronics/watch" style={{marginRight:200}}>
                <b>Watch</b>
            </Link>
            
            <Outlet></Outlet>
        </>
    )
}

export default Electronics;