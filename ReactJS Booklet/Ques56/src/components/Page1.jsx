import { Link, Outlet } from 'react-router-dom';

const Page1 = ()=>{
    return(
        <>
            <Link to="/page1/child1" style={{marginRight:200}}>
                <b>Child1</b>
            </Link>

            <Link to="/page1/child2" style={{marginRight:200}}>
                <b>Child2</b>
            </Link>

            <Outlet></Outlet>
        </>
    )
}

export default Page1;