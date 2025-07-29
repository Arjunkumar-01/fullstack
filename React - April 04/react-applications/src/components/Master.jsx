import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Laptops from "./Laptops";
import Mobiles from "./Mobile";
import Watches from "./Watches";
import Dell from "./Dell";
import Hp from "./Hp";
import Samsung from "./Samsung";
import Vivo from "./Vivo";
import Fasttract from "./Fasttrack";
import Titan from "./Titan";

const Master=()=>{
    return(
        <>
            <BrowserRouter>
                <Link to="/laptops/111/p1/one/10000" style={{marginRight:200}}>
                    <b>Laptops</b>
                </Link>
                <Link to="/mobiles" style={{marginRight:200}}>
                    <b>Mobiles</b>
                </Link>
                <Link to="/watches/333/pthree/30000" style={{marginRight:200}}>
                    <b>Watches</b>
                </Link>
                <Routes>
                    <Route path="/laptops/:pid/:pname/:pcost" element={<Laptops></Laptops>}>
                                    <Route path="laptops/dell" element={<Dell></Dell>}></Route> 
                                    <Route path="laptops/hp" element={<Hp></Hp>}></Route> 
                    </Route>

                    <Route path="/mobiles" element={<Mobiles></Mobiles>}>
                                    <Route path="mobiles/samsung" element={<Samsung></Samsung>}></Route>
                                    <Route path="mobiles/vivo" element={<Vivo></Vivo>}></Route>
                    </Route>
                    
                    <Route path="/watches/:pid/:pname/:pcost" element={<Watches></Watches>}>
                                    <Route path="watches/titan" element={<Titan></Titan>}></Route>
                                    <Route path="watches/fasttrack" element={<Fasttract></Fasttract>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;