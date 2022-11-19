import React from 'react'
import PropTypes from 'prop-types'
export const App = ({titulo, subtitulo}) => {
    return (

    <>
        <h1> {titulo} </h1>
        <p><small>Resultado:</small> {subtitulo} </p>
        
    
    </>
  )
}

// asignacion de tipos a las variables en js
App.propTypes = {
titulo:PropTypes.string,
subtitulo:PropTypes.number
}
// propiedades por default muestran su contenido en caso de no existir valor en las propiedades
App.defaultProps = {

    titulo: "No hay titulo"
}