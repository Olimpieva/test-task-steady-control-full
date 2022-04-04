import api from "../../utils/Api";
import { initialCitizens } from "../../utils/initialCitizens";
import { initialCities } from "../../utils/initialCities";
import { FAILURE, GET_ALL_CITIES, GET_ALL_CITIZENS, REQUEST, SUCCESS } from "./actionTypes";

const addInitialCities = async () => {
    let cities = [];

    for (let city of initialCities) {
        const newCity = await api.addCity({
            name: city.name,
            data: city.data
        });

        cities = [...cities, newCity];
    };

    return cities;
};

const addInitialCitizens = async () => {
    let citizens = [];

    for (let citizen of initialCitizens) {
        const { city, district, street } =
            citizen.groups.reduce((acc, item) => ({ ...acc, [item.type]: item.name }), {});

        const newCitizen = await api.addCitizen({
            name: citizen.name,
            city,
            district,
            street,
        });

        citizens = [...citizens, newCitizen];
    };

    return citizens;
};

export const getAllCities = () => async (dispatch, getState) => {

    const { cities: { loading } } = getState();

    if (loading) {
        return;
    };

    dispatch({ type: GET_ALL_CITIES + REQUEST });

    let allCities;

    try {
        allCities = await api.getAllCities();

        if (allCities.length === 0) {
            allCities = await addInitialCities();
        };

        dispatch({ type: GET_ALL_CITIES + SUCCESS, payload: allCities });
    } catch (error) {
        dispatch({ type: GET_ALL_CITIES + FAILURE, payload: { errorCode: error.code || 500, message: error.message } });
    };
};

export const getAllCitizens = () => async (dispatch, getState) => {
    const { citizens: { loading } } = getState();

    if (loading) {
        return;
    };

    dispatch({ type: GET_ALL_CITIZENS + REQUEST });

    let allCitizens;

    try {
        allCitizens = await api.getAllCitizens();

        if (allCitizens.length === 0) {
            allCitizens = await addInitialCitizens();
        };

        dispatch({ type: GET_ALL_CITIZENS + SUCCESS, payload: allCitizens });
    } catch (error) {
        dispatch({ type: GET_ALL_CITIZENS + FAILURE, payload: { errorCode: error.code || 500, message: error.message } });
    };
};
