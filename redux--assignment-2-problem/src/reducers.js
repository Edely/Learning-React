const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {

        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        }

        const newState = {
            ...state
        };

        const persons = [...state.persons.concat(newPerson)];
        newState.persons = persons;

        return newState;
    }

    if (action.type === 'REMOVE') {

        const newState = {
            ...state
        }

        const persons = state.persons.filter(person => person.id !== action.val)
        newState.persons = persons;

        return newState;
    }

    return state;
}

export default reducer;