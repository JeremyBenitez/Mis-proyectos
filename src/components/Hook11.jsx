import React, {useState} from 'react';
import Child from './Child';

function Hook11() {
const [counter, setCounter] = useState(0);
const [input, setInput] = useState('');

return(
 <div className='box'>   
<h1>Hello from parent: {counter}</h1>
<button onClick={() => setCounter(counter + 1)}>+1</button>
<Child counter= {counter} updateCounter={() => setCounter(counter +1)}/>
<input type="text" onChange={e => setInput(e.target.value)} value={input} />
</div>
);

}

export default Hook11;