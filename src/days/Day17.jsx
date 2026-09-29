import {useState} from 'react';

function Day17() {
    const [count, setCount] = useState(0);

    function upCounter() {
        setCount(count + 1);
    }

    function downCounter() {
        setCount(count - 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {upCounter}> +1 </button>
            <button onClick = {downCounter}> -1 </button>
        </div>
    );
}

export default Day17;