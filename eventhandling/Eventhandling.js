import React, { useState } from 'react';
import "./Event.css"





const Eventhandling = () => {
    const purple = '#800080'
    const pink='#FFC0CB'
    let orange = '#FFA500';
    const [bg, newBg] = useState(purple);
    const [name, newName] = useState('Click Me');
    // const[back,useBack]=useState(orange);

    const bgchange = () => {
        // console.log('clicked');
        let orange = '#FFA500';
        newBg(orange);
        newName(' Single Clicked')
    }
    const bgchange2 = () => {
        let pink = '#FFC0CB'
        newBg(pink);
        newName(' Double Clicked')
    }

    return (
        <>
            <div className='btn' style={{ backgroundColor: bg }}>   
                <button onClick={bgchange} onDoubleClick={bgchange2}> {name}</button>
                {/* <button onMouseEnter={bgchange} onMouseLeave={bgchange2}> {name}</button> */}
            </div>
        </>
    )
}
export default Eventhandling;