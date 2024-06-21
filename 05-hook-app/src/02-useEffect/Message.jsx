import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })


    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y })
            console.log(x, y);
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }

    }, [])


    return (
        <>
            <h3 className="mt-1">El usuario ya existe</h3>
            <h5>{JSON.stringify(coords)}</h5>
        </>
    )
}
