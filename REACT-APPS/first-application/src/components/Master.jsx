import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Laptops from './Laptops';
import Mobiles from './Mobiles';
import Watches from './Watches';
import Dell from './Dell';
import Lenovo from './Lenovo';
import Vivo from './Vivo';
import Oneplus from './Oneplus';
import Titan from './Titan';
import Rolex from './Rolex';

const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to="/laptops" style={{marginRight:200}}>
                    <b>Laptops</b>
                </Link>
                <Link to="/mobiles" style={{marginRight:200}}>
                    <b>Mobiles</b>
                </Link>
                <Link to="/watches">
                    <b>Watches</b>
                </Link>

                <Routes>
                    <Route path="/laptops" element={<Laptops></Laptops>}>
                                <Route path="laptops/dell" element={<Dell></Dell>}></Route>
                                <Route path="laptops/lenovo" element={<Lenovo></Lenovo>}></Route>
                    </Route> 
                    <Route path="/mobiles" element={<Mobiles></Mobiles>}>
                                <Route path="mobiles/vivo" element={<Vivo></Vivo>}></Route>
                                <Route path="mobiles/oneplus" element={<Oneplus></Oneplus>}></Route>
                    </Route>
                    <Route path="/watches" element={<Watches></Watches>}>
                                <Route path="watches/titan" element={<Titan></Titan>}></Route>
                                <Route path="watches/rolex" element={<Rolex></Rolex>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Master;