import React from 'react'

const Demo = (probs) => {
  return (
    <div>
    <h1>Addition is {probs.a+probs.b}</h1>
    <h1>subtraction is {probs.a-probs.b}</h1>
    <h1>division is {probs.a/probs.b}</h1>
    <h1>multiplication is {probs.a*probs.b}</h1>
    </div>
  );
}

export default Demo;
