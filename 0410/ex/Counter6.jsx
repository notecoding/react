import { useState } from 'react';
export default function Counter6() {

const [number, setNumber] = useState(0);
return (
<>
<h1>{number}</h1>
<button onClick={() => {
setNumber(number + 1);
console.log(number)
setNumber(number + 2);
console.log(number)
setNumber(number + 3);
console.log(number)
}}>+3</button>
</>
)
}