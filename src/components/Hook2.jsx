import React, { useState } from "react";

function Hook2() {

  const [count, setcount] = useState(0);

  const increment = () => {
    setcount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setcount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setcount(0);
  };

  return (

    <>
      <div>
        <h4>AQUI EMPIEZA LA PARTE DE JEREMY</h4>

      <h4>Jeremy</h4>

      <h2>Ejemplo del Hook (useCounter)</h2>

      <h2>count={count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>

           
            
      <h4>---HASTA AQUI EL DE JEREMY---</h4>
      <hr />
    </div>    

    </>

  );
}

export default Hook2;
