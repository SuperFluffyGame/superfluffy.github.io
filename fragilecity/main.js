const citiesJson = await (await fetch("./data/cities.json")).json();
const mainJson = await (await fetch("./data/main.json")).json();

const year = document.querySelector("#year");
const day = document.querySelector("#day");

year.textContent = mainJson.year;
day.textContent = mainJson.day;
