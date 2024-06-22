import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {

        getFech();

    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }


    const getFech = async () => {

        setLoadingState()

        const resp = await fetch(url)

        //sleep (retardo de unos segundo a proposito)
        await new Promise(resolve => setTimeout(resolve, 1500))

        //si la respuesta falla
        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            })
            return;
        }

        //si esta todo ok
        const data = await resp.json()
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        /* console.log({ data }); */
    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
