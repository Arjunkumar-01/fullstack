import FNSHook from "../custom/FNSHook";

const Comp1 = () => {

    const res = FNSHook("https://reqres.in/api/users?page=2");

    return(
        <>
            <p>{JSON.stringify(res)}</p>
        </>
    )
}

export default Comp1;