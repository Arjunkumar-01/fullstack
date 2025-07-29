import { Link, Outlet } from 'react-router-dom';

const Laptops = ()=> {
    return(
        <>
            <p>Laptops soon !!!</p>
            <Link to="laptops/dell" style={{marginRight:200}}>
                <b>Dell</b>
            </Link>
            <Link to="laptops/lenovo">
                <b>Lenovo</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Laptops;