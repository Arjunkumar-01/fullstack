import Global1 from '../context/Global1';
import Global2 from '../context/Global2';
import Global3 from '../context/Global3';
import Comp2 from './Comp2';

const Comp1 = ()=>{
    return(
        <>
            <Global1.Provider value="Hello, FNS !!!">
                <Global2.Provider value={100}>
                    <Global3.Provider value={{"react":"frontend", "mongodb":"backend", "Mern":"fullstack"}}>
                        <Comp2></Comp2>
                    </Global3.Provider>
                </Global2.Provider>
            </Global1.Provider>
        </>
    )
}

export default Comp1;

