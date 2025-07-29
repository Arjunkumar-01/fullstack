import { Outlet, Link, useParams } from "react-router-dom";

const Watches=()=>{

    const {pid, pname, pcost} = useParams();

    return(
        <>
            <h1>Watches Soon!!! {pid} {pname}  {pcost}</h1>
            <Link to="watches/titan" style={{marginRight:200}}>Titan</Link>
            <Link to="watches/fasttrack" style={{marginRight:200}}>FastTrack</Link>

            <Outlet></Outlet>
        </>
    )
}
export default Watches;