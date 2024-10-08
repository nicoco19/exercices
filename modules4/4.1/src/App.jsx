import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',number: '39_44_5759558' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(false);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number : newNumber
    }
    if(persons.some(person => person.name === newPerson.name)){
      setErrorMessage(true);
    }else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
      setErrorMessage(false);
    }
  }

  const handleName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  }
  const handleNumber = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  }


  return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handleName}/>
            number: <input value={newNumber} onChange={handleNumber} />
          </div>
          <div>
            <button  type="submit">add</button>
            {errorMessage && <p>Le nom est déjà présent</p>}

          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map(person => (
            <p>{person.name} {person.number}</p>
        ))}

      </div>
  )
}

export default App