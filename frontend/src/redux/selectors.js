import { createSelector } from "reselect";

export const citiesStateSelector = (state) => state.cities;
export const citizensStateSelector = (state) => state.citizens;
export const allCitiesSelector = (state) => state.cities.entities;
export const allCitizensSelector = (state) => state.citizens.entities;

export const sortedCitizensSelector = createSelector(
    allCitizensSelector,
    citizens => {
        const resObj = {};
        citizens.map((citizen) => {
            let currentType = resObj;
            citizen.groups.map((group, index) => {
                const isLastElement = index === (citizen.groups.length - 1);

                if (!currentType[group.name]) {
                    currentType[group.name] = isLastElement ? [] : {};
                };

                if (isLastElement) {
                    currentType[group.name].push(citizen);
                };

                currentType = currentType[group.name];
                return undefined;
            });

            return undefined;
        });

        return resObj;
    }
);