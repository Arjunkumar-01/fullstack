import Child from './Child';

const Parent = ({ children })=>{
    return(
        <>
            { children }
            <Child></Child>
        </>
    )
}

export default Parent;