export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export const addPerson = (name, surname, street, city) => ({
  type: ADD_PERSON,
  payload: {
    name,
    surname,
    street,
    city
  }
});

export const deletePerson = (index) => ({
  type: DELETE_PERSON,
  payload: {
    index
  }
});