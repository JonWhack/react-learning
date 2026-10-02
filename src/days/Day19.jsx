import {useState} from "react";

function Day19() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    function toggleLogin() {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            {isLoggedIn ? (
                <p>Welcome back, Hassan!</p>
            ) : (
                <p>Please Log in.</p>
            )}
            {isLoggedIn && <p> You have 3 new messages.</p>}
            <button onClick={toggleLogin}>
                {isLoggedIn ? "Log out" : "Log in"}
            </button>
            
        </div>
    );
}

export default Day19;