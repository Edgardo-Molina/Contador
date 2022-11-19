import {PropTypes} from 'prop-types'
import { useState } from 'react'

// si la funcion no usa nada del componente es mejor que esté fuera
// const funcion = (event) => console.log(event)

export const Counter = ({value}) => {

    const [valor, setValor] = useState(100)

    const subir = () => {

        return setValor((valor) => valor += 1)
        // return setValor( valor += 1)
    }
    const bajar = () => {

        return setValor((valor) => valor -= 1)
    }
    const reset = () => {

        return setValor((valor) => valor = value)
    }

  return (
    <>
    <h1>Contador</h1>
    <h2> {valor} </h2>

    <button onClick={ subir }> +1 </button>
    <button onClick={ bajar }> -1 </button>
    <button onClick={ reset }> Reset </button>
    </>
  )
}

Counter.propTypes = {value: PropTypes.number}
