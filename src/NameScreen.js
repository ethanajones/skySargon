import React, {useState} from "react";

const NameScreen = () => {
    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (<>
        <h1>What is your name?</h1>
        <input type="text" value={name} onChange={handleChange}/>
        <NotSargon name={name}/>
    </>)
}

const NotSargon = ({name}) => {

    return (
        <>
            {name ? <h2>So you say your name is {name}? </h2> : null}
            {name !== "Sargon" ? <h3>Oh sorry, you're not the person I'm looking for.</h3> : <h3>Welcome Home.</h3>}
        </>)
}


export default NameScreen;