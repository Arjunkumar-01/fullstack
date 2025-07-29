import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Component1  from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./component4";  
import Component5 from "./Component5";
import Component6 from "./Component6";
import Component7 from "./Component7";
import Component8 from "./Component8";
import Component9 from "./Component9";
import Component10 from "./Component10";

const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to="/comp1" style={{marginRight:200}}>
                    <b>Component 1</b>
                </Link>

                <Link to="/comp2" style={{marginRight:200}}>
                    <b>Component 2</b>
                </Link>

                <Routes>
                    <Route path="/comp1" element={<Component1></Component1>}>
                                <Route path="comp1/comp3" element={<Component3></Component3>}>
                                            <Route path="comp1/comp3/comp7" element={<Component7></Component7>}></Route>
                                </Route>
                                <Route path="comp1/comp4" element={<Component4></Component4>}>
                                            <Route path="comp1/comp4/comp8" element={<Component8></Component8>}></Route>
                                </Route>
                    </Route>
                    <Route path="/comp2" element={<Component2></Component2>}>
                                <Route path="comp2/comp5" element={<Component5></Component5>}>
                                            <Route path="comp2/comp5/comp9" element={<Component9></Component9>}></Route>
                                </Route>
                                <Route path="comp2/comp6" element={<Component6></Component6>}>
                                            <Route path="comp2/comp6/comp10" element={<Component10></Component10>}></Route>
                                </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Master;