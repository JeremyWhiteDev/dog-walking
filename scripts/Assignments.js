import { getPets, getWalkers } from "./database.js";
import { getWalkerCities } from "./database.js";
import { getCities } from "./database.js";

// Get copy of state for use in this module
const pets = getPets();
const walkers = getWalkers();
const walkerCities = getWalkerCities();
const cities = getCities();

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
  let petWalker = null;
  //fixed allWalker typo
  for (const walker of allWalker) {
    if (walker.id === pet.walkerId) {
      petWalker = walker;
    }
  }

  return petWalker;
};

//to create an array of numbers that match city id

const findWalkerCity = (currentWalker, allWalkerCities) => {
  let walkerCities = [];
  for (const walkerCity of allWalkerCities) {
    if (walkerCity.walkerId === currentWalker.id) {
      walkerCities.push(walkerCity);
    }
  }
  return walkerCities;
};

//create function that references the array above and creates a string.

const makeCityList = (currentWalkerCityArr, allCities) => {
  let cityList = [];
  //for each walker city array, take the current object, use that current objects city.id to find the name of the city
  for (const walkerCity of currentWalkerCityArr) {
    const foundWalkerCities = allCities.find((x) => {
      return x.id === walkerCity.cityId;
    });
    cityList.push(foundWalkerCities.name);
  }

  return cityList.join(", ");
};

export const Assignments = () => {
  let assignmentHTML = "";
  assignmentHTML += "<ul>";
  //fixed missing plus equals
  // fixed findWalker Typo
  for (const currentPet of pets) {
    const currentPetWalker = findWalker(currentPet, walkers);
    const currentPetWalkerCityArr = findWalkerCity(
      currentPetWalker,
      walkerCities
    );
    const currentPetWalkerCityList = makeCityList(
      currentPetWalkerCityArr,
      cities
    );
    //fixed missing plus equals
    assignmentHTML += `
    <li>
    ${currentPet.name} is being walked by
    ${currentPetWalker.name} in ${currentPetWalkerCityList}
    </li>
    `;
  }

  assignmentHTML += "</ul>";

  return assignmentHTML;
};
