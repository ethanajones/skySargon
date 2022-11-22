import React, {useState} from "react";

const NameScreen = () => {
    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>What is your name?</h1>
            <input type="text" value={name} onChange={handleChange} placeholder="enter name" />
            <NotSargon name={name}/>
        </div>
    )
}

const NotSargon = ({name}) => {
    let dietyText = "";
    if (name === "Sargon") {
        dietyText = 'Welcome Home.'
    } else {
        dietyText = "Oh sorry, you're not the person I'm looking for.";
    }

    return (
        <>
            {name ? <h2>You say your name is {name}? </h2> : null}
            {name ? <h3>{dietyText}</h3> : null}
        </>)
}


export default NameScreen;