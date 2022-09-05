import React from 'react';


const Child = props =>{
    const {counter, updateCounter} = props;

    return(

        <div className='child'>
                <h1>child - {counter}</h1>
                <button onClick={updateCounter}> Click</button>
        </div>


    )
}

export default Child;