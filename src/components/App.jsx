import { useState } from "react"
import { Counter } from "./Counter/Counter";
import Clock from "./Clock/Clock";
export const App = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    console.log(name);
    
    const handleNameChange = (e) => {
       setName(e.target.value)
    }
    const handleMailChange = (e) => {
       setMail(e.target.value)
   }

    return <>
        {/* <Counter initialValue={0} /> */}
        
        <Clock/>
        {/* <form action="">
            <input onChange={handleNameChange} type="text" name='name' value={name} />
             <input onChange={handleMailChange} type="mail" name='mail' value={ mail } />
       </form> */}
    </>
}

