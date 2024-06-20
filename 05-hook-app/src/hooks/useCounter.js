import { useState } from "react"

export const useCounter = (valorInicial = 10) => {

    const [valor, setValor] = useState(valorInicial)

    const incremetar = (value = 1) => {
        setValor(valor + value)
    }

    const restar = (value = 1) => {
        setValor(valor - value)
    }

    const resetear = () => {
        setValor(valorInicial)
    }

    return {
        valor,
        incremetar,
        restar,
        resetear
    }
}