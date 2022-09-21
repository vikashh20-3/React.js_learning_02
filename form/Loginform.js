import React, { useState } from 'react'
import "../form/Form.css"


const Basicform = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState('');
     const [allnew, setallnew] = useState([]);

    const submitform=(e)=>{

          e.preventDefault();
        console.log('clicked')
        const newentry={email:email, password:password};
        setallnew([...allnew, newentry]);
        console.log(allnew)

    }

    return (
        <>                  
            <form action='' onSubmit={submitform}>
                <div >
                    <label htmlFor='email'> Email </label>
                    <input type='email'
                     autoComplete='off'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value) }
                    />

                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input type='password'
                    autoComplete='off'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
               <button type='submit'> Login</button>
            </form>
            <div>
                {
                    allnew.map((curlement)=>{
                        return(
                  <>
                   <p>{curlement.email}</p>
                   <p>{curlement.password}</p>
                   </>
                        )
                    })
                }
            </div>
        </>
    )
};
export default Basicform;
