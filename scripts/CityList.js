import { getWalkers } from "./database.js";
import { getCities } from "./database.js";

const walkers = getWalkers();
//fixed getWalker typo

const cities = getCities();

export const CityList = () => {
  let citiesHTML = "<ol>";

  for (const city of cities) {
    citiesHTML += `<li>${city.name}</li>`;
  }
  //fixed walker typo
  citiesHTML += "</ol>";

  return citiesHTML;
};
