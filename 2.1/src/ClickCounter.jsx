import { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0)
  console.log(`le compteur est : ${count}`);
  return (
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}


      </button>

  );
}

export default ClickCounter;