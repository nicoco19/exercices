import {useContext} from 'react'
import { Context as CountersContext } from "../contexts/CountersContext";
import '../App.css'

function App() {
  const {good, incGood} = useContext(CountersContext);
  const {ok, incOk} = useContext(CountersContext);
  const {bad, incBad} = useContext(CountersContext);
  const {resetAll} = useContext(CountersContext);
  return (
      <>
        <ul>
          <li>good : {good} <button onClick={incGood}>increase good</button></li>
          <li>ok : {ok} <button onClick={incOk}>increase ok</button></li>
          <li>bad : {bad} <button onClick={incBad}>increase bad</button></li>
        </ul>

        <button onClick={resetAll}>Reset score</button>
      </>
  )
}

export default App
