import {Link, Outlet, useParams} from "react-router-dom";
const Laptops=()=>{

    const {pid, pname, pcost} = useParams();

    return(
        <>
            <h1>Laptops Soon!!! {pid} {pname} {pname}</h1>            
            <Link to="laptops/dell" style={{marginRight:200}}> <b>Dell</b> </Link>
            <Link to="laptops/hp" style={{marginRight:200}}> <b>HP</b> </Link>

            <Outlet></Outlet>       
        </>
    )
}
export default Laptops;