import { useState } from "react"

export const useForm = (inicitialForm = {}) => {


    const [formState, setFormState] = useState(inicitialForm)


    const onInputChange = (event) => {

        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(inicitialForm)
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
