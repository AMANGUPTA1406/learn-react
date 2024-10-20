import React, {useContext, useState} from "react";
import UserContext from "../context/UserContext";

function Login(){
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const {setUser} = useContext(UserContext)

const handleSubmit = (e)=>{
    e.preventDefault();
    setUser({username,password});

}

    return(
        <div>
            <h2>Login</h2>
            <input type='text' 
            value={username}
            className="bg-slate-200"
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'/>
            {" "}
            <input type='text' 
            value={password}
            className="bg-slate-200"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'/>

            <button className="bg-orange-500" onClick={handleSubmit} >Login Button</button>
        </div>
    )

}

export default Login;