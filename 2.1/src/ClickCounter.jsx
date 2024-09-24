import { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0)
  const [title,setTitel] = useState("")
  console.log(`le compteur est : ${count}`);
  if(count === 10 && title === ""){
    setTitel("You are a master in the art of clicking !")
  }
  return (
      <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{title}</p>
      </>

  );
}

export default ClickCounter;