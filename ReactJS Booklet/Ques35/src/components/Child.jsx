import SubChild from './SubChild';

const Child = (props)=>{
    return(
        <>
            <SubChild {...props}></SubChild>
        </>
    )
}
export default Child;