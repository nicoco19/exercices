
import Headers from 'components/headers/Headers.jsx'
import Content from "components/content/Content.jsx";
const App = () => {
  const course = 'Half Stack application development'
  const exercices = [
    {name:'exercises1',number:10},
    {name:'exercises2',number:7},
    {name:'exercises3',number:14}
  ]
  const parties = [
    {name:'part1',text:'Fundamentals of React',exercice : exercices[0]},
    {name: 'part2',text:'Using props to pass data',exercice : exercices[1]},
    {name: 'part3',text:'State of a component',exercice : exercices[2]}
  ];

  return(
      <div>
        <Headers course={course}/>
        <Content parties={parties}/>

      </div>
  )
}



export default App