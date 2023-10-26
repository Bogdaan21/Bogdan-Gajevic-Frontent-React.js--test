import React, { useState, useCallback, useEffect } from 'react';
import Insert from './pages/Insert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './pages/Table';

function App() {

  const [person, setPerson] = useState([]);
  let url = 'https://react-test-f6256-default-rtdb.firebaseio.com/person'

  const fetchPersonsHandler = useCallback (async() => { 
      const response = await fetch(`${url}.json`); 
      const data = await response.json();
      const loadedPerson = [];

      for (const key in data) {
        loadedPerson.push({
          id: key,
          name: data[key].name,
          surname: data[key].surname,
          street: data[key].street,
          city: data[key].city,
        });
      }
      setPerson(loadedPerson);
  }, []);

  useEffect(() => {
    fetchPersonsHandler();
  }, [person]); 

  async function addPersonHandler(movie) {
    const response = await fetch(`${url}.json`, { 
    method: 'POST', 
    body: JSON.stringify(movie),  
    headers: {
      'Content-Type': 'application/json'
    }
  });
    const data = await response.json()
    console.log(data);
  }

  async function deletePersonHandler(id) {
    try {
      await fetch(`${url}/${id}.json`, {
        method: 'DELETE',
      });
  
      setPerson(prevPersons => prevPersons.filter(person => person.id !== id));
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  }


  return (
    <>
      <Insert onAddPerson={addPersonHandler} />
      <Table deletePersons={deletePersonHandler} persons={person}/>
    </>
  );
}

export default App;
