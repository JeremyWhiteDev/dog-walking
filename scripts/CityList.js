import { getWalkers } from "./database.js";

const walkers = getWalkers();
//fixed getWalker typo

export const CityList = () => {
  let citiesHTML = "<ol>";

  for (const walker of walkers) {
    citiesHTML += `<li>${walker.city}</li>`;
  }
  //fixed walker typo
  citiesHTML += "</ol>";

  return citiesHTML;
};
