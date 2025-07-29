import { Link, Outlet } from "react-router-dom";

const Sports = ()=>{
    return(
        <>
            <h1>Sports soon...!!!</h1>

            <Link to="sports/cricket" style={{marginRight:200}}>
                <b>Cricket</b>
            </Link>

            <Link to="sports/kabaddi" style={{marginRight:200}}>
                <b>Kabaddi</b>
            </Link>

            <Link to="sports/hockey" style={{marginRight:200}}>
                <b>Hockey</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Sports;