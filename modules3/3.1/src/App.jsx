import { useState } from 'react'

import './App.css'

const App = () => {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [isStat, setIsStat] = useState(false);

  function inc(name){
    if (name === "good"){
        setGood(good+1);
    }
    if(name === "neutral"){
      setNeutral(neutral+1);
    }
    if(name === "bad"){
      setBad(bad+1);
    }
    setTotal(total+1);
    if (isStat === false){
      setIsStat(true);
    }

  }

  return(
      <div>

        <h1>give feedback</h1>
        <button onClick={() => inc("good")}>good</button>
        <button onClick={() => inc("neutral")}>neutral</button>
        <button onClick={() => inc("bad")}>bad</button>
        <h1>statistics</h1>

        {isStat ? (
            <div>
              <p>good : {good}</p>
              <p>neutral : {neutral}</p>
              <p>bad : {bad}</p>
              <p>all : {total}</p>
              <p>average : {(good - bad) / total} </p>
              <p>positive : {(100 / total) * good} %</p>
            </div>
        ) : (
            <p>No feedback given</p>
        )}
      </div>
  )
}

export default App
