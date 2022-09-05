import React, { useState, useMemo, useCallback } from 'react'

const Hook10 = () => {

    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(1);
    const [counter3, setCounter3] = useState(1);

    const set1 = () => setCounter1(prev => prev + 1);
    const set2 = useMemo(() => setCounter2(prev => prev + 1), []);
    const set3 = useCallback(() => setCounter3(prev => prev + 1), []);

    return (
        <>
            <div>
                <button onClick={set1}>Contador {counter1}</button><br /><br />
            </div>
            <div>
                <button onClick={set2}>Contador useMemo {counter2}</button><br /><br />
            </div>
            <div>
                <button onClick={set3}>Contador useCallback {counter3}</button>
            </div>
        </>
    );
}

export default Hook10;