import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Child1 from './Child1';
import Child2 from './Child2';

const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to="/page1" style={{marginRight:200}}>
                    <b>Link1</b>
                </Link>

                <Link to="/page2" style={{marginRight:200}}>
                    <b>Link2</b>
                </Link>

                <Link to="/page3" style={{marginRight:200}}>
                    <b>Link3</b>
                </Link>

                <Routes>
                    <Route path="/page1" element={<Page1></Page1>}>
                                <Route path="/page1/child1" element={<Child1></Child1>}></Route>
                                <Route path="/page1/child2" element={<Child2></Child2>}></Route>
                    </Route>

                    <Route path="/page2" element={<Page2></Page2>}></Route>
                    <Route path="/page3" element={<Page3></Page3>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Master;