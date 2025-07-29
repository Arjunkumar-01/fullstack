 import { useState } from 'react';

const First = ()=>{
    
    const [isVisible, setIsVisible] = useState(false);

    return(
        <>
            <button onClick={()=>setIsVisible(!isVisible)}>Show / Hide</button>

            {isVisible && <h1>Welcome to Conditional Rendering</h1>}
              
        </>
    )
}

export default First;