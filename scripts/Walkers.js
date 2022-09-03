import { getWalkers, getCities, getWalkerCities } from "./database.js";

import { findWalkerCity, makeCityList } from "./Assignments.js";

const cities = getCities();
const walkerCities = getWalkerCities();
const walkers = getWalkers();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("walker")) {
    const [, walkerId] = itemClicked.id.split("--");

    for (const walker of walkers) {
      if (walker.id === parseInt(walkerId)) {
        const walkerCityArray = findWalkerCity(walker, walkerCities);
        const cityList = makeCityList(walkerCityArray, cities);
        window.alert(`${walker.name} services ${cityList}`);
      }
    }
  }
});

//fixed get walker typo

export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`;
    //fixed name typo
  }

  walkerHTML += "</ul>";
  return walkerHTML;
  //fixed missing return statement for walkers
};
