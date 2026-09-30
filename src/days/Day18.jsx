import { useState } from 'react'

function Day18() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    function handleName(event) {
        setName(event.target.value);
    }
    function handleAge(event) {
        setAge(Number(event.target.value))
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleName}/>
            <input type="number" value={age} onChange={handleAge}/>
            <p>Hello, {name}, Aged {age}. Next Year: {age + 1}</p>
        </div>

    );
}

export default Day18;