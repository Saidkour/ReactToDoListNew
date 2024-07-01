
const initialState = {
    darkmode: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkmode: !state.darkmode,
            };
        case "DARK_MODE":{
            return {
                ...state,
                darkmode: action.payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;