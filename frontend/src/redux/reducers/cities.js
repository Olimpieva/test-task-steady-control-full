import { FAILURE, GET_ALL_CITIES, REQUEST, SUCCESS, } from "../actions/actionTypes";

const initialState = {
    entities: [],
    loading: false,
    error: null
};

const citiesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_CITIES + REQUEST:
            return { ...state, loading: true };
        case GET_ALL_CITIES + SUCCESS:
            return { ...state, entities: action.payload, loading: false, error: null }
        case GET_ALL_CITIES + FAILURE:
            return { ...state, entities: [], loading: false, error: action.payload };
        default:
            return state;
    };
};

export default citiesReducer;