import { useEffect, useState } from "react";
import Users from "./Users";
import withLoading from "./withLoading";

const NewComp = withLoading(Users);

const EnhancedComponent = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [emps, setEmps] = useState( [] );

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setEmps([
                {name:"John Doe", email:"john@gmail.com", phone:123456789},
                {name:"Calven Klien", email:"calvenklien@gmail.com", phone:456332418}
            ])
        }, 2000)
    }, []);

    return(
        <>
            <NewComp isLoading={isLoading} emps={emps}></NewComp>
        </>
    )
}

export default EnhancedComponent;