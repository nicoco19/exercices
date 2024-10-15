import React, {useState} from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [good, setGood] = useState(0);
  const [ok, setOk] = useState(0);
  const [bad, setBad] = useState(0);

  const incGood = () => {
    setGood(good+1);
  }
  const incOk = () => {
    setOk(ok+1);
  }
  const incBad = () => {
    setBad(bad+1);
  }
  const resetAll = () => {
    setGood(0);
    setOk(0);
    setBad(0);
  }

  const exposedValue = {
    good,
    incGood,
    ok,
    incOk,
    bad,
    incBad,
    resetAll
  }

  return <Context.Provider value={exposedValue}>
    {/* eslint-disable-next-line react/prop-types */}
    {props.children}
  </Context.Provider>
}

export {
  Context,
  ProviderWrapper,
}