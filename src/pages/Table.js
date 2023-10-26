import React from 'react';
import Card from '../ui/Card';

const Table = (props) => {
  const handleDeleteClick = (id) => {
    props.deletePersons(id);
  };

  return (
    <div className="container">
      <div className="d-flex ">
        <div className="col">
          {props.persons.map((info, index) => (
            <Card key={index}>
              <ul key={info.id} className="d-md-flex align-items-center">
                <li className="col-md-2">{info.name}</li>
                <li className="col-md-2">{info.surname}</li>
                <li className="col-md-3">{info.street}</li>
                <li className="col-md-3">{info.city}</li>
                <li className="col-md-2">
                  <button onClick={() => handleDeleteClick(info.id)} className="btn btn-primary w-100">
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
