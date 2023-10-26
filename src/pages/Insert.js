import { useRef } from 'react';
import Card from '../ui/Card';

function Insert(props) {
  const nameRef = useRef('');
  const surnameRef = useRef('');
  const streetRef = useRef('');
  const cityRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    const name = nameRef.current.value;
    const surname = surnameRef.current.value;
    const street = streetRef.current.value;
    const city = cityRef.current.value;

    if (!name || !surname || !street || !city) {
      alert('Molimo vas unesite sva polja.');
      return;
    }

    const person = {
      name: name,
      surname: surname,
      street: street,
      city: city,
    };

    props.onAddPerson(person);

    nameRef.current.value = '';
    surnameRef.current.value = '';
    streetRef.current.value = '';
    cityRef.current.value = '';

  }

  return (
    <>
      <form onSubmit={submitHandler} className="container mt-5">
        <Card>
          <ul className="d-md-flex align-items-end">
            <li className="col-md-2">
              <label htmlFor="inputName">Firstname</label>
              <input type="text" className="form-control" id="inputName" placeholder="Firstname" ref={nameRef} />
            </li>
            <li className="col-md-2">
              <label htmlFor="inputSurname">Lastname</label>
              <input type="text" className="form-control" id="inputSurname" placeholder="Lastname" ref={surnameRef} />
            </li>
            <li className="col-md-3">
              <label htmlFor="inputSurname">Street</label>
              <input type="text" className="form-control" id="inputSurname" placeholder="Street" ref={streetRef} />
            </li>
            <li className="col-md-3">
              <label htmlFor="inputSurname">City</label>
              <input type="text" className="form-control" id="inputSurname" placeholder="City" ref={cityRef} />
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
