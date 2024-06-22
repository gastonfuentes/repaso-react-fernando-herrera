import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {



    const { data, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/4')



    return (
        <>
            <h1>Informacion de pokemon</h1>
            <hr />

            {isLoading === true && <h4>...cargando</h4>}

            <h4>{data?.name}</h4>
        </>
    )
}
