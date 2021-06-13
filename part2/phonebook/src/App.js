import React, { useState } from 'react';

const Filter = (props) => {
  const handleFilterChange = (e) => {
    props.setNameFilter(e.target.value);
  }

  return (
    <div>
      filter shown with: <input value={props.nameFilter} onChange={handleFilterChange} />
    </div>
  );
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addName}>
      <div>
        name: <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div>
        number: <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

const Persons = ({filteredPersons}) => {
  return (
    <div>
      {filteredPersons.map(person => 
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      )}
    </div>
  );
}

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const addName = (e) => {
    e.preventDefault();

    if (persons.filter(person => person.name === newName).length > 0) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject));
    }

    setNewName('');
    setNewNumber('');
    setNameFilter('');
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const filteredPersons = persons.filter(p => {
    return p.name.toLowerCase().includes(nameFilter.toLowerCase());
  })

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />

      <h3>Add new entry</h3>
      
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons filteredPersons={filteredPersons} />
    </div>
  );
}

export default App;
