const initialState = { // тут уже конфигурация базового состояния для нашего редакс-стора
    data: 1,
    text: 'Hello!'
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            };
        case 'SET_NEW_TEXT':
        return {
            ...state,
            text: action.payload
        };
        default:
            return state;
    }
}

export default dataReducer;