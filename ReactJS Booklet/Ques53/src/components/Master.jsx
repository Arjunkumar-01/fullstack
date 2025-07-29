import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Electronics from './Electronics';
import Sports from './Sports';
import Appliances from './Appliances';
import Laptop from './Laptop';
import Watch from './Watch';
import Mobile from './Mobile';
import Cricket from './Cricket';
import Kabaddi from './Kabaddi';
import Hockey from './Hockey';
import Fridge from './Fridge';
import Washing from './Washing.jsx';
import Ac from './Ac.jsx';

const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to="/electronics" style={{marginRight:200}}>
                    <b>Electronics</b>
                </Link>
                <Link to="/sports" style={{marginRight:200}}>
                    <b>Sports</b>
                </Link>
                <Link to="/appliances" style={{marginRight:200}}>
                    <b>Appliances</b>
                </Link>

                <Routes>
                    <Route path="/electronics" element={<Electronics></Electronics>}>
                                <Route path="electronics/laptop" element={<Laptop></Laptop>}></Route>
                                <Route path="electronics/mobile" element={<Mobile></Mobile>}></Route>
                                <Route path="electronics/watch" element={<Watch></Watch>}></Route>
                    </Route>

                    <Route path="/sports" element={<Sports></Sports>}>
                                <Route path="sports/cricket" element={<Cricket></Cricket>}></Route>
                                <Route path="sports/kabaddi" element={<Kabaddi></Kabaddi>}></Route>
                                <Route path="sports/hockey" element={<Hockey></Hockey>}></Route>
                    </Route>

                    <Route path="/appliances" element={<Appliances></Appliances>}>
                                <Route path="appliances/fridge" element={<Fridge></Fridge>}></Route>
                                <Route path="appliances/washing" element={<Washing></Washing>}></Route>
                                <Route path="appliances/ac" element={<Ac></Ac>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Master;