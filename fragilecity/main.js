import { getCityNetWorth, leaderboard } from "./calc.js";

const citiesJson = await (await fetch("./data/cities.json")).json();
const mainJson = await (await fetch("./data/main.json")).json();

const YearEl = document.querySelector("#year");
const DayEl = document.querySelector("#day");
const NetWorthEl = document.querySelector("#net-worth");

YearEl.textContent = mainJson.year;
DayEl.textContent = mainJson.day;

const netWorthLb = leaderboard(citiesJson, c => getCityNetWorth(c)).slice(
    0,
    100
);

const elems = [];

for (let i = 0; i < netWorthLb.length; i++) {
    const entry = netWorthLb[i];
    const str = `${entry[0]}: ${entry[1]}`;
    const strEl = document.createTextNode(str);
    elems.push(strEl, document.createElement("br"));
}

NetWorthEl.append(...elems);
