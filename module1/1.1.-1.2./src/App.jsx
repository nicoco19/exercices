const App = () => {
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  //const exercises1 = 10
 // const part2 = 'Using props to pass data'
 // const exercises2 = 7
  // const part3 = 'State of a component'
  //const exercises3 = 14
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
const Headers = (props) =>{
  return(
      <>
        <h1>props.course</h1>
      </>
  )
}

const Content = (props) => {
  return(
      <>
        {props.parties.map((part, index) => (
            <div key={index}>
              <p>{part.name}, {part.text}</p>
              <Total exercice={part.exercice}/>
            </div>
        ))}
      </>
  )
}

const Total = (props) => {
  return(
      <>
        <p>{props.exercice.name} à {props.exercice.number} exercices</p>
      </>
      )

}
export default App