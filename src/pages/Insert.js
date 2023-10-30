import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../store/actions';
import Card from '../ui/Card';

function Insert() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!name || !surname || !street || !city) {
      alert('Molimo vas unesite sva polja.');
      return;
    }

    dispatch(addPerson(name, surname, street, city));
    setName('');
    setSurname('');
    setStreet('');
    setCity('');
  };

  return (
    <>
      <form onSubmit={submitHandler} className="container mt-5">
        <Card>
          <ul className="d-md-flex align-items-end">
            <li className="col-md-2">
              <label htmlFor="inputName">Firstname</label>
              <input type="text" className="form-control" id="inputName" placeholder="Firstname" value={name} onChange={(e) => setName(e.target.value)} />
            </li>
            <li className="col-md-2">
              <label htmlFor="inputSurname">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="inputSurname"
                placeholder="Lastname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </li>
            <li className="col-md-3">
              <label htmlFor="inputSurname">Street</label>
              <input type="text" className="form-control" id="inputSurname" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} />
            </li>
            <li className="col-md-3">
              <label htmlFor="inputSurname">City</label>
              <input type="text" className="form-control" id="inputSurname" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            </li>
            <li className="col-md-2">
              <button type="submit" className="btn btn-primary w-100">
                Insert
              </button>
            </li>
          </ul>
        </Card>
      </form>
    </>
  );
}

export default Insert;
