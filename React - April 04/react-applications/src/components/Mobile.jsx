import { Outlet, Link } from "react-router-dom";

const Mobiles=()=>{
    return(
        <>
            <h1>Mobiles Soon!!!</h1>
            <Link to="mobiles/samsung"  style={{marginRight:200}}><b>Samsung</b></Link>
            <Link to="mobiles/vivo"  style={{marginRight:200}}><b>Vivo</b></Link>

            <Outlet></Outlet>
        </>
    )
}
export default Mobiles;