import React , {useState} from 'react';

const Projectone = () => {
const [New ,setNew]= useState(0)
// const [New,setDec]=useState(New)
     
    const increase=()=>{
        console.log('clicked')
        setNew(New+1);
    }
    const decrease =()=>{
        console.log('clickedd')
        if(New>0){
        setNew(New-1);
        }else {}
    }
    return (
        <div className='Container'>
         <div className='num'>
          <h2>{New}</h2>
         </div>
         <div className='btn_2'>
             <button className='btn1' onClick={increase}>Increm</button>
             <button className='btn2' onClick={decrease}>Decrem</button>
         </div>
        </div>)

};
export default Projectone;