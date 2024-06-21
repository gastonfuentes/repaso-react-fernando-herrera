import { useEffect } from "react"
import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'gasti',
        email: 'gasti@gasti.com'
    })

    const { username, email } = formState

    const onInputChange = (event) => {

        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
    }


    useEffect(() => {
        /* console.log('useeffect se llamo!'); */
    }, [])


    useEffect(() => {
        /* console.log('form changed!'); */
    }, [formState])


    useEffect(() => {
        /* console.log('email changed!'); */
    }, [email])


    return (
        <>
            <h1>Form simple</h1>
            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
            <input type="email" className="form-control mt-2" placeholder="gas@gas.com" name="email" value={email} onChange={onInputChange} />


            {(username === 'gasti2') && <Message />}


        </>
    )
}
