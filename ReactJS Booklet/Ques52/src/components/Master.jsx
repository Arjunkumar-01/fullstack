import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home.jsx';
import About from './About.jsx';
import Portifolio from './Portifolio.jsx';

const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to="/home" style={{marginRight:200}}>
                    <b>Home</b>
                </Link>
                <Link to="/about" style={{marginRight:200}}>
                    <b>About</b>
                </Link>
                <Link to="/portifolio" style={{marginRight:200}}>
                    <b>Portfolio</b>
                </Link>

                <Routes>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/portifolio" element={<Portifolio></Portifolio>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Master;