import Total from '../total/Total.jsx'

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
export default Content