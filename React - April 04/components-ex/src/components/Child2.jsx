const Child2 = (props)=> {
    return(
        <>
            <button onClick={()=>props.test_func("Hello",100)}>
                ClickMe
            </button>
        </>
    )
}

export default Child2;

