import React, {useState} from "react";

const NameScreen = () => {
    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <h1>What is your name?</h1>
            <input type="text" value={name} onChange={handleChange}/>
            <h2>So you say your name is {name}</h2>
        </>
    )
}
export default NameScreen;