import React, { useRef, useState } from 'react'

const Hook9= () => {

    //const [contador, setContador] = useState(0);
    const cont = useRef(0);

    const handleClick = (incrementa) => {
        if (incrementa) {
            cont.current++;
        } else {
            cont.current--;
        }
        console.log(`Contador: ${cont.current}`);
    }

    return (
        <>
        <h1>ESTO SE VE EN CONSOLA</h1>
            <button onClick={() => handleClick(false)}>Decrementa</button>
            <button onClick={() => handleClick(true)}>Incrementa</button>
        </>
    );
}

export default Hook9;