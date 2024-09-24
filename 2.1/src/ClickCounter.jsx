import { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  });
  const [title,setTitel] = useState("")
  const [message , setMessage] = useState(`count is ${count}`)
  console.log(`le compteur est : ${count}`);
  if(count === 10 && title === ""){
    setTitel("You are a master in the art of clicking !")
  }
  return (
      <>
        <button onClick={() =>{setCount((count) => count + 1); localStorage.setItem("count", JSON.stringify(count+1))}} onMouseEnter={() => setMessage("Please click on me now !")} onMouseLeave={() => setMessage(`count is ${count}`)}>
          {message}
        </button>
        <p>{title}</p>
      </>

  );
}

export default ClickCounter;