import React from 'react'
import { useState } from 'react'

const Hook1 = () => {
    const [mensaje, setMensaje] = useState('Prueba useState');
    const [numero, setNumero] = useState(11);
    const [nombres, setNombres] = useState(['Alejandro']);

    const Click = () => {
        setNumero(11);
    }

    const ClickName = () => {
        setNombres([...nombres, 'Jose']);
    }

    return (
        <>
            <h4>Alejandro</h4>
            <p>{mensaje}</p>
            <p>{numero}</p>
            <button onClick={Click}>Presiona</button><br /><br />
            <button onClick={ClickName}>Agregar Nombre</button>
            <ul>
                {nombres.map(nombre => (
                    <li>{nombre}</li>
                ))}
            </ul>
            <h4>---HASTA AQUI EL DE ALEJANDRO---</h4>
            <hr />
        </>
    )
}

export default Hook1;