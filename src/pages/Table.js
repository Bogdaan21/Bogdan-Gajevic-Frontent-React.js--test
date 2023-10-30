import React from 'react';
import Card from '../ui/Card';
import { deletePerson } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(deletePerson(index));
  };

  const persons = useSelector((state) => state.persons);

  return (
    <div className="container">
      <div className="d-flex ">
        <div className="col">
          {persons.map((info, index) => (
            <Card key={index}>
              <ul key={info.id} className="d-md-flex align-items-center">
                <li className="col-md-2">{info.name}</li>
                <li className="col-md-2">{info.surname}</li>
                <li className="col-md-3">{info.street}</li>
                <li className="col-md-3">{info.city}</li>
                <li className="col-md-2">
                  <button onClick={() => handleDelete(index)} className="btn btn-primary w-100">
                    Remove
                  </button>
                </li>
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
