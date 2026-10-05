import { useState } from 'react';

function Day20() {
    const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function toggleLogin() {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                />
            {isLoggedIn ? (
                <p>Welcome, {name || "Stranger"}</p>
            ) : (
                <p>You are logged out.</p>
            )}

            {isLoggedIn && name && <p>Your profile is now visible to others.</p>}

            <button onClick={toggleLogin}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
}

export default Day20;