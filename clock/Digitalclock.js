import React,{useState} from 'react';



const Digitalclock = () => {
    let time  = new Date().toLocaleTimeString();
    
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
    };
    setInterval(UpdateTime,1000);
    return (
        <>
            <h1 className='watch'>{ctime}</h1>
        </>
    )
}
export default Digitalclock;