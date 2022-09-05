import React, { useEffect, useState } from 'react'

const Hook3 = () => {

    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log("Primero")
    }, []);

    useEffect(() => {
        console.log("El número es: "+ num)
    }, [num]);

    useEffect(() => {
        console.log("Clean Up")
    }, [num]);

    return (
        <>
            <h4>Alejandro</h4>
            <p>El ejemplo se ve por consola</p>
            <button onClick={() => setNum(num+1)}>Sumar</button>
            <h4>---HASTA AQUI EL DE ALEJANDRO---</h4>
            <hr />
        </>
    );
}

export default Hook3;