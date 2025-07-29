import { useState } from 'react'; 

const Child = ()=>{

    const [obj, setObj] = useState( {"Key1":100, "Key2":"Hello", "Key3":true} );

    return(
        <>
            <p>{obj.Key1}</p>
            <p>{obj.Key2}</p>
            {
                obj.Key3 ? <p>True</p> : <p>False</p>
            }
        </>
    )
}

export default Child;