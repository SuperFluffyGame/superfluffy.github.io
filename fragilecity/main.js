import {
    getCityNetWorth,
    getCityProfit,
    getEmploymentRate,
    getMissilesLaunched,
    leaderboard,
    missilesLaunchedLeaderboard,
    sumCities,
    sumCitiesArray,
} from "./calc.js";

const FRAGILE_URL = "https://fragile.city/";

const MONEY_FORMATTER = Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    notation: "compact",
});
const NUMBER_FORMATTER = Intl.NumberFormat("en-us", {
    notation: "compact",
});
const LONG_NUMBER_FORMATTER = Intl.NumberFormat("en-us");

const citiesJson = await (await fetch("./data/cities.json")).json();
const mainJson = await (await fetch("./data/main.json")).json();

const YearEl = document.querySelector("#year");
const DayEl = document.querySelector("#day");
const Leaderboards = document.querySelector(".leaderboards");
const CitizenSpans = document.querySelectorAll(".citizen-cell");
const InfoList = document.querySelector(".info-list");

YearEl.textContent = mainJson.year;
DayEl.textContent = mainJson.day;

// citizens
const citizenSums = sumCitiesArray(citiesJson, c => c.citizens);
for (let i = 0; i < CitizenSpans.length; i++) {
    const span = CitizenSpans.item(i);
    span.textContent = LONG_NUMBER_FORMATTER.format(citizenSums[i]);
}

makeInfoListing("Total Citizens", mainJson.totalPopulation);
makeInfoListing("Pollution", mainJson.totalPollution);
makeInfoListing("Pollution/day", mainJson.dailyPollution);

// makeLeaderboard("Citizens", c => c.totalCitizens);
makeLeaderboard("Net Worth", c => getCityNetWorth(c), { useCurrency: true });
makeLeaderboard("Profit", c => getCityProfit(c), { useCurrency: true });

const citizenLeaderboard = leaderboard(citiesJson, c => c.totalCitizens).slice(
    0,
    100
);
const citizenLeaderboardCities = citizenLeaderboard.map(([name]) => {
    return citiesJson.find(c => c.name === name);
});
const employmentLeaderboard = leaderboard(
    citizenLeaderboardCities,
    c => getEmploymentRate(c) * 100
).slice(0, 100);
makeLeaderboardFromData("Employment Rate", employmentLeaderboard, null, {
    usePercent: true,
    total: false,
});

makeLeaderboard("Air Bases", c => c.buildings["air_bases"], { filter: 0 });
makeLeaderboard("Shield Cap", c => c.resources["Shields"]?.[1] ?? 0, {
    filter: 50,
});
const missilesLaunched = missilesLaunchedLeaderboard(citiesJson);
makeLeaderboardFromData(
    "Missiles Launched",
    missilesLaunched,
    c => missilesLaunched.find(m => m[0] === c.name)?.[1] ?? 0
);

makeLeaderboard("Energy", c => c.resources["Energy"]?.[1] ?? 0, {
    filter: 0,
});
makeLeaderboard("Fun", c => c.resources["Fun"]?.[0] ?? 0, {
    filter: 0,
});
makeLeaderboard("Health", c => c.resources["Health"]?.[0] ?? 0, {
    filter: 0,
});

function getTableRowFromEntry(
    i,
    entry,
    useCurrency = false,
    usePercent = false
) {
    const tr = document.createElement("tr");

    const hr = document.createElement("hr");

    const posTd = document.createElement("td");
    posTd.textContent = i + 1;
    const nameTd = document.createElement("td");
    nameTd.appendChild(getCityLink(entry[0]));

    const valTd = document.createElement("td");
    valTd.textContent = useCurrency
        ? MONEY_FORMATTER.format(entry[1])
        : NUMBER_FORMATTER.format(entry[1]);

    if (usePercent) valTd.textContent += "%";

    tr.append(posTd, nameTd, valTd);

    return tr;
}

function getCityLink(cityName) {
    const a = document.createElement("a");
    a.href = `${FRAGILE_URL}/city/${encodeURIComponent(cityName)}`;
    a.textContent = cityName;

    return a;
}

function makeInfoListing(name, value) {
    const listing = document.createElement("span");
    listing.classList.add("listing");

    const heading = document.createElement("h4");
    heading.innerText = name + ":";

    const valueEl = document.createElement("span");
    valueEl.textContent = NUMBER_FORMATTER.format(value);

    listing.append(heading, valueEl);

    InfoList.appendChild(listing);
}

function makeLeaderboard(
    name,
    getFn,
    { useCurrency = false, filter = null, usePercent = false } = {}
) {
    let lbData = leaderboard(citiesJson, getFn).slice(0, 100);
    if (filter !== null) {
        lbData = lbData.filter(v => v[1] > filter);
    }

    makeLeaderboardFromData(name, lbData, getFn, { useCurrency, usePercent });
}

function makeLeaderboardFromData(
    name,
    lbData,
    getFn,
    { useCurrency = false, total = true, usePercent = false } = {}
) {
    const totalData = total ? sumCities(citiesJson, getFn) : null;

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("leaderboard");
    const nameEl = document.createElement("h3");
    nameEl.textContent = name;
    containerDiv.appendChild(nameEl);

    const lbDiv = document.createElement("table");

    if (total) {
        nameEl.textContent += ` (${(useCurrency
            ? MONEY_FORMATTER
            : NUMBER_FORMATTER
        ).format(totalData)})`;
    }

    for (let i = 0; i < lbData.length; i++) {
        const entry = lbData[i];
        lbDiv.append(getTableRowFromEntry(i, entry, useCurrency, usePercent));
    }

    containerDiv.appendChild(lbDiv);

    Leaderboards.appendChild(containerDiv);

    return lbData;
}
