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
const Leaderboards = document.querySelector(".leaderboards");

YearEl.textContent = mainJson.year;
DayEl.textContent = mainJson.day;

makeLeaderboard("Citizens", c => c.totalCitizens);
makeLeaderboard("Net Worth", c => getCityNetWorth(c), { useCurrency: true });
makeLeaderboard("Air Bases", c => c.buildings["air_bases"], { filter0: true });
makeLeaderboard("Shield Cap", c => c.resources["Shields"]?.[1] ?? 0, {
    filter0: true,
});
makeLeaderboard("Energy", c => c.resources["Energy"]?.[1] ?? 0, {
    filter0: true,
});
makeLeaderboard("Fun", c => c.resources["Fun"]?.[0] ?? 0, {
    filter0: true,
});
makeLeaderboard("Health", c => c.resources["Health"]?.[0] ?? 0, {
    filter0: true,
});

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

function makeLeaderboard(
    name,
    getFn,
    { useCurrency = false, filter0 = false } = {}
) {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("leaderboard");
    const nameEl = document.createElement("h3");
    nameEl.textContent = name;
    containerDiv.appendChild(nameEl);

    const lbDiv = document.createElement("table");

    let lbData = leaderboard(citiesJson, getFn).slice(0, 100);
    if (filter0) {
        lbData = lbData.filter(v => v[1] !== 0);
    }

    for (let i = 0; i < lbData.length; i++) {
        const entry = lbData[i];
        lbDiv.append(getTableRowFromEntry(i, entry, useCurrency));
    }

    containerDiv.appendChild(lbDiv);

    Leaderboards.appendChild(containerDiv);
}
