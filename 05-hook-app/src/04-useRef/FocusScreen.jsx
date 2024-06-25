import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()


    const onFocus = () => {
        /* console.log(inputRef); */
        inputRef.current.select()
    }

    return (
        <>
            <h1>Focus screen </h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="ingrese su numbre"
                className="form-control"
            />

            <button
                onClick={onFocus}
                className="btn btn-primary mt-2">

                Focus

            </button>

        </>
    )
}
