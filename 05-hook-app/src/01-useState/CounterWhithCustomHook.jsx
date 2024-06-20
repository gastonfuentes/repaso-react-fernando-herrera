import { useCounter } from "../hooks/useCounter"

export const CounterWhithCustomHook = () => {

    const { valor, incremetar, resetear, restar } = useCounter()

    return (
        <>
            <h1>Counter whith Custom Hook: {valor}</h1>
            <hr />
            <button onClick={() => incremetar(2)} className='btn btn-primary'>+1</button>
            <button onClick={resetear} className='btn btn-primary'>reset</button>
            <button onClick={() => restar(4)} className='btn btn-primary'>-1</button>

        </>
    )
}
