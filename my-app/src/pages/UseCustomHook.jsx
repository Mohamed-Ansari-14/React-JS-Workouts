import React from 'react'
import UseLocalStorage from '../hooks/UseLocalStorage'

const UseCustomHook = () => {
    //Entered Data will be stayed in the field after refreshing the page also bcoz of local storage.
    const [name, setName] = UseLocalStorage('username', '');
    const [id, setId] = UseLocalStorage('userId', '');

    return (
        <div style={{textAlign:"center", marginTop:"200px"}}>
            <input type='text' placeholder='Enter your name' value={name}
                onChange={(e) => setName(e.target.value)} />
            <h2>Hello, Mr.{name}</h2>

            <input type='text' placeholder='Enter your Id' value={id}
                onChange={(e) => setId(e.target.value)} />
            <h2>Your Id is, {id}</h2>
        </div>
    )
}

export default UseCustomHook
