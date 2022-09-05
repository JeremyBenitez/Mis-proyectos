import { useState, useRef, useEffect, useLayoutEffect } from 'react';

function Hook4() {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef();

  /* 
  useLayoutEffect es síncrono.
  Verá el cambio de número solo después de que haya cambiado el relleno.
  */

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 100);

    /* el loop es solo para hacer que los cambios en este ejemplo sean lo suficientemente lentos para ser observables */
    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000000) setSectionStyle({ paddingTop: `${random}px` })
    }
  }, [number])

  return (
    <>
    <main className="App">
      <section ref={sectionRef} style={sectionStyle}>
        <p>{number}</p>
        <div>
          <button className='boton_1' onClick={() => setNumber(prev => prev - 1)}>-</button>
          <button className='boton_1' onClick={() => setNumber(prev => prev + 1)}>+</button>
        </div>
      </section>
    </main>
    </>
  );
}

export default Hook4;

