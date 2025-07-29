import { useState } from 'react';

const ControlledComponent = ()=>{

    const [login, setLogin] = useState({"username":"", "password":""});

    const handleChange = (e)=>{
        let {name,value} = e.target;
        setLogin((prevState)=>{
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    const handle_submit = (e)=>{
        e.preventDefault();
        login.username === 'FNS' && login.password === 'FNS@123' ? alert("Login Successful") : alert("Login Failed");
        setLogin({"username":"" , "password":""});
    }

    return(
        <>
            <form onSubmit={handle_submit}>
                <input type="text"
                       value={login.username}
                       onChange={handleChange}
                       name="username"></input> <br />
                < input type="password"
                        value={login.password}
                        onChange={handleChange}
                        name="password"></input> <br /><br />
                <input type="submit" value="submit"></input> <br />
            </form>
        </>
    )
}

export default ControlledComponent;