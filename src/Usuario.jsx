import React from 'react'

function Usuario(props) {
  return (
      <>
        <img className='w-40 h-40 rounded-[50%] bg-black mx-auto' src={props.ruta} alt="foto de perfil"/>
        <h3 className='text-2xl'>{props.name}</h3>
        <p></p>
      </>
  )
}
defaultProps = {
    name: 'Usuario',
    ruta: 'public\Rubik\'s_cube.svg.png'
    }
export default Usuario