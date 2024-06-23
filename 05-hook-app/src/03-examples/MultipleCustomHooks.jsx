import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHooks = () => {

    //sumamos al custom hook useCounter
    const { incremetar, restar, valor } = useCounter(1)


    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)


    return (
        <>
            <h1>Informacion de pokemon</h1>
            <hr />

            {isLoading === true
                ? <LoadingMessage />
                : (
                    <PokemonCard
                        id={valor}
                        name={data.name}
                        sprite={[
                            data.sprites.back_default,
                            data.sprites.back_shiny
                        ]}
                    />
                )
            }

            {/* <h4>{data?.name}</h4> */}

            <button onClick={() => valor > 1 ? restar() : null} className="btn btn-primary">Anterior</button>
            <button onClick={() => incremetar()} className="btn btn-primary">Siguiente</button>
        </>
    )
}
