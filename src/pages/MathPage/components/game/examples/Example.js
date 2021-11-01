import React, { useEffect, useState } from 'react'
import './Example.css'


function Examples({ a, sign, b, onRight, onWrong }) {

    const [example, setExample] = useState(`${a} ${sign} ${b} = `)
    const [value, setValue] = useState('')

    useEffect(() => {
        setExample(`${a} ${sign} ${b} = `);
    }, [a, b])

    const onChange = (event) => {
        setValue(event.target.value)
    }
    const checkExample = (event) => {
        event.preventDefault()
        if(!value){
            return;
        }
        let d= 0;
        switch(sign){
            case '+': d= a+b; break;
            case '-': d= a-b; break;
            case '*': d= a*b; break;
            case '/': d= a/b; break;
        }

        if (value === d.toString()) {
            
            if (typeof onRight === "function") {
                onRight()
            }

        } else {
            if (typeof onWrong === "function") {
                onWrong(d)
            }
        }
        setValue("")
    }
  
    return (
        
        <form className="Exsample"  onSubmit={checkExample}>
            <span>{example}</span>
            <input autoFocus className="Exsample__input" value={value} onChange={onChange} />
            <button className="Exsample__button" type='submit'>Ok</button>
        </form>
    );

}


export default Examples

