import Child from './Child.jsx';

const Parent = ({ children })=>{
    return(
        <>
            {children}
            <Child></Child>
        </>
    )
}

export default Parent;