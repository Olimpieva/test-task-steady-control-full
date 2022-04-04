import { API_OPTIONS } from "./constants";

class MainApi {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    async _sendRequest(path, requestOptions) {
        try {
            const response = await fetch(`${this._url}/${path}`, { ...requestOptions });

            if (!response.ok) {
                throw response;
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    getAllCitizens() {
        return this._sendRequest(`citizens`, {
            method: 'GET',
            headers: this._headers
        });
    };

    getAllCities() {
        return this._sendRequest(`cities`, {
            method: 'GET',
            headers: this._headers
        });
    };

    addCitizen({ name, city, district, street }) {
        return this._sendRequest(`citizens`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, city, district, street })
        });

    };

    addCity({ name, data }) {
        return this._sendRequest(`cities`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, data })
        });
    };

};

const api = new MainApi(API_OPTIONS);

export default api;