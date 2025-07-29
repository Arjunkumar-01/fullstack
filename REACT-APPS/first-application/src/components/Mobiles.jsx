import { Link, Outlet } from 'react-router-dom';

const Mobiles = ()=>{
    return(
        <>
            <p>Mobiles soon !!!</p>
            <Link to="mobiles/vivo" style={{marginRight:200}}>
                <b>Vivo</b>
            </Link>
            <Link to="mobiles/oneplus">
                <b>Oneplus</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Mobiles;