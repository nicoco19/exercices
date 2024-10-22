import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null);

const ProviderWrapper = (props) => {

  const defaultOpinions = [
    {
      uuid: uuidv4(),
      opinion: "A",
      votes: 2
    },
    {
      uuid: uuidv4(),
      opinion: "B",
      votes: 1
    }
  ];

  const [opinion, setOpinion] = useState(defaultOpinions);
  const [sortedOpinion, setSortedOpinion] = useState(defaultOpinions);

  useEffect(() => {
    const sorted = opinion.sort((a, b) => b.votes - a.votes);
    setSortedOpinion(sorted);
  }, [opinion]);

  const addOpinion = (opinion) => {
    if(opinion.find(o => o.opinion.toLowerCase() === opinion.toLowerCase()) !== undefined){
      alert("l'opinion existe déjà");
    }else{
      const newTab = [...opinion];
      newTab.push({
        uuid: uuidv4(),
        opinion:opinion,
        vote:1
      });
      setOpinion(newTab)
    }
  }

  const addVote = (id) => {
    const actualOption = [...opinion];
    actualOption.find(actual => actual.uuid === id ).votes ++;
    setOpinion(actualOption);
  }

  const exposedValue = {
    opinion,
    sortedOpinion,
    addOpinion,
    addVote,
  }
  return <Context.Provider value={exposedValue}>
    {props.children}
  </Context.Provider>

}

export {
  Context,
  ProviderWrapper,
}