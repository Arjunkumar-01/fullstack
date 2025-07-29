import { useDispatch, useSelector } from "react-redux";
import apiCall from "../apiCall/apicall";
import { useEffect } from "react";

const Comp1 = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(apiCall());
    }, []);

    const res = useSelector(state => state);

    return(
        <>
            <p>{JSON.stringify(res)}</p>
        </>
    )
}

export default Comp1;