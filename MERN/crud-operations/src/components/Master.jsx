import Dashboard from "./Dashboard";
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Insert from "./Insert";
import EditRecord from "./EditRecord";

const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/insert" element={<Insert></Insert>}></Route>
                    <Route path="/edit" element={<EditRecord></EditRecord>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};
export default Master;