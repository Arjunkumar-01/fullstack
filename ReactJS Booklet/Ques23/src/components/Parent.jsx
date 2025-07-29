import First from "./First";
import Second from "./Second";
import Third from "./Third";

const Parent = () => {
    return(
        <>
            <h1>This is the Parent Component</h1>
            <First></First>
            <Second></Second>
            <Third></Third>
        </>
    )
}

export default Parent;