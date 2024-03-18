import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function LoginPage({setUser}) {
    const [userName, setUserName] = useState('');

    function _handleLogin(evt) {
        evt.preventDefault();
        setUser(userName);
    }

    return (
        <main>
            <h1>Login:</h1>
            <div>
                <form onSubmit={_handleLogin}>
                    <div>Username:</div>
                    <input 
                        name="userName"
                        value={ userName }
                        onChange={(evt) => setUserName(evt.target.value)}
                    />
                    <button type="submit">Login</button>
                
                </form>
            </div>
        
        </main>
    );
};