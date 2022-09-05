import React, { useState, useMemo } from 'react'

const Hook5 = () => {

    const [number, setNumber] = useState(0);

  // Using useMemo
    const squaredNum = useMemo(()=> {
    return squareNum(number);
    }, [number])
    const [counter, setCounter] = useState(0);

 // Change the state to the input
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    }

  // Increases the counter by 1
    const counterHander = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <input type="number" placeholder="Enter a number"
            value={number} onChange={onChangeHandler}>
            </input>

            <div>OUTPUT: {squaredNum}</div>
            <button onClick= {counterHander}>Counter ++</button>
            <div>Counter: {counter}</div>
        </>
    );
}

function squareNum(number){
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
}

export default Hook5;