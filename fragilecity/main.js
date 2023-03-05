import { getCityNetWorth, leaderboard } from "./calc.js";

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

const citiesJson = await (await fetch("./data/cities.json")).json();
const mainJson = await (await fetch("./data/main.json")).json();

const YearEl = document.querySelector("#year");
const DayEl = document.querySelector("#day");
const NetWorthEl = document.querySelector("#net-worth");
const CitizensEl = document.querySelector("#citizens");

YearEl.textContent = mainJson.year;
DayEl.textContent = mainJson.day;

const netWorthLb = leaderboard(citiesJson, c => getCityNetWorth(c)).slice(
    0,
    100
);
const citizenLb = leaderboard(citiesJson, c => c.totalCitizens).slice(0, 100);

for (let i = 0; i < citizenLb.length; i++) {
    const entry = citizenLb[i];
    CitizensEl.append(getTableRowFromEntry(i, entry));
}
for (let i = 0; i < netWorthLb.length; i++) {
    const entry = netWorthLb[i];
    NetWorthEl.append(getTableRowFromEntry(i, entry, true));
}

function getTableRowFromEntry(i, entry, doFormatMoney = false) {
    const tr = document.createElement("tr");

    const hr = document.createElement("hr");

    const posTd = document.createElement("td");
    posTd.textContent = i + 1;
    const nameTd = document.createElement("td");
    nameTd.appendChild(getCityLink(entry[0]));

    const valTd = document.createElement("td");
    valTd.textContent = doFormatMoney
        ? MONEY_FORMATTER.format(entry[1])
        : NUMBER_FORMATTER.format(entry[1]);

    tr.append(posTd, nameTd, valTd);

    return tr;
}

function getCityLink(cityName) {
    const a = document.createElement("a");
    a.href = `${FRAGILE_URL}/city/${encodeURIComponent(cityName)}`;
    a.textContent = cityName;

    return a;
}
