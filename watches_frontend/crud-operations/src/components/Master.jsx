import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';

const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard></Dashboard>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Master;