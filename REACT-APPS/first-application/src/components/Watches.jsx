import { Link, Outlet } from 'react-router-dom';

const Watches = ()=>{
    return(
        <>
            <p>Watches soon !!!</p>
            <Link to="watches/titan" style={{marginRight:200}}>
                <b>Titan</b>
            </Link>
            <Link to="watches/rolex" >
                <b>Rolex</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Watches;