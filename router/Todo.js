    import React, { useState } from 'react'

    const Todo = () => {
        const [Inputdata, setInputdata] = useState('')
        const [items, setitems] = useState([])

        const addItems = () => {
            if (!Inputdata) {

            } else {

                setitems([...items, Inputdata])
                setInputdata('')
            }
        }
    
        const deletetodo =(id)=>{
            console.log(id);
            const updateditems=items.filter((curelement,index)=>{
                return index== id;

            });


        }

        return (
            <div className='todobox'>
                <div className='main'>
                    <figure>
                        <img className='image1' src='data:image/png;base64,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' alt='logo' ></img>
                        <figcaption>Add Your Todo Here🖋</figcaption>
                    </figure>
                </div>
                <div className='second'>
                    <input type="text" placeholder="✍ enter your todo here"
                        value={Inputdata}
                        onChange={(e) => { setInputdata(e.target.value) }}
                    />
                    <button  className="btn4" title='addtodo' onClick={addItems} >➕</button>
                </div>
                <div className=' showitems'>
                    {
                        items.map((curelement,index) => {
                            return(
                            <div className='eachitems' key={index}>
                                <p>{curelement}</p>
                                <button  className='btn3' onClick={()=>{deletetodo(index)}}>➖</button>
                            </div>)

                        })
                    }
                </div>
                <div className='btn2'>
                    <button className='btn6'>Add Todo</button>
                </div>

            </div>

        )
    };
    export default Todo;
