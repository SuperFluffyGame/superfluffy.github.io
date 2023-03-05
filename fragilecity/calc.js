// @ts-check

import BuildingsJson from "./buildings.js";

export function sumCitiesArray(cities, getVal) {
    return cities.reduce((t, n) => {
        const arr = getVal(n);

        for (let i = 0; i < (arr?.length ?? 0); i++) {
            t[i] = (t[i] ?? 0) + (arr?.[i] ?? 0);
        }
        return t;
    }, []);
}

export function sumCities(cities, getVal) {
    return cities.reduce((total, next) => {
        const thisVal = getVal(next) ?? 0;
        return total + thisVal;
    }, 0);
}

export function sumObjValues(obj) {
    return Object.values(obj).reduce((a, b) => a + b, 0);
}

export function getCityProfit(c) {
    return (
        (c.resources["Daily Tax Income"]?.[0] ?? 0) -
        (c.resources["Daily Cost"]?.[0] ?? 0)
    );
}

export function getCityNetWorth(c) {
    let netWorth = c.resources?.["Money"]?.[0] ?? 0;

    for (const building in c.buildings) {
        const buildingCount = c.buildings[building];

        netWorth += getBuildingNetWorth(building, buildingCount);
    }

    return netWorth;
}

export function getBuildingCost(building, n) {
    // cost * round((current_count-1)^2+1)
    const initialCost = BuildingsJson[building];
    const price = initialCost * Math.round(Math.pow(n - 1, 2) + 1);

    return price;
}

export function getBuildingNetWorth(building, count) {
    let totalCost = 0;
    for (let i = 0; i < count; i++) {
        totalCost += getBuildingCost(building, i + 1);
    }
    return totalCost;
}

export function leaderboard(cities, getVal) {
    return cities
        .sort((a, b) => {
            return (getVal(b) ?? 0) - (getVal(a) ?? 0);
        })
        .map(c => [c.name, getVal(c) ?? 0]);
}
