import { FAILURE, GET_ALL_CITIZENS, REQUEST, SUCCESS, } from "../actions/actionTypes";

const initialState = {
    entities: [],
    loading: false,
    error: null
};

const citizensReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_CITIZENS + REQUEST:
            return { ...state, loading: true };
        case GET_ALL_CITIZENS + SUCCESS:
            return { ...state, entities: action.payload, loading: false, error: null }
        case GET_ALL_CITIZENS + FAILURE:
            return { ...state, entities: [], loading: false, error: action.payload };
        default:
            return state;
    };
};

export default citizensReducer;