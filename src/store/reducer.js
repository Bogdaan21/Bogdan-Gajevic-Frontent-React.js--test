import { ADD_PERSON, DELETE_PERSON } from './actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        persons: [...state.persons, { name: action.payload.name, surname: action.payload.surname, street: action.payload.street, city: action.payload.city }]
      };
    case DELETE_PERSON:
      const newPerson = [...state.persons];
      newPerson.splice(action.payload.index, 1);
      return {
        ...state,
        persons: newPerson
      };
    default:
      return state;
  }
};

export default reducer;
