// Deel 1 Objecten:
const person = {
  name: "Lawrence",
  age: 45,
  evaluations: [7, 10, 9],
};
// Output Deel 1
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);
console.log(person.evaluations);

// Deel 2 Arrays:
const rgbColors = ["green", "blue", "red"];
// Output Deel 2
console.log(rgbColors);
console.log(rgbColors.length);
console.log(rgbColors[0]);
console.log(rgbColors[rgbColors.length - 1]);
rgbColors.push("yellow");
console.log(rgbColors);
rgbColors.push(5);
console.log(rgbColors);
rgbColors.push({ greeting: "Hi, i am an object" });
console.log(rgbColors);
console.log(rgbColors[rgbColors.length - 1].greeting);

// Deel 3: Bekijk een "real-life" object
const catBreeds = [
  {
    name: "Abyssinian",
    description:
      "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: [
      "Active",
      "Energetic",
      "Independent",
      "Intelligent",
      "Gentle",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
      favourite_food: "fish",
      medium_liked_food: "dried fruits",
      disliked_food: "walnuts",
    },
  },
  {
    name: "Aegean",
    description:
      "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
      favourite_food: "tuna",
      medium_liked_food: "canned food",
      disliked_food: "all fruits",
    },
  },
  {
    name: "American Bobtail",
    description:
      "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [
      "Intelligent",
      "Interactive",
      "Lively",
      "Playful",
      "Sensitive",
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
      favourite_food: "meaty things",
      medium_liked_food: "tuna",
      disliked_food: "canned food",
    },
  },
];
// OUTPUT
// 1. Log de naam van het laatste kattenras. Resultaat: American Bobtail
console.log("Name of the latest cat:", catBreeds[2].name);
// 2. Log de energy levels van de eerste kat. Resultaat: 5
console.log("Energy level first cat:", catBreeds[0].energy_level);
// 3. Log het eerste temperament van de temperamenten van de tweede kat. Resultaat: Affectionate;
console.log("First Temparement cat 2:", catBreeds[1].temperament[0]);
// 4. Log het laatst temperament van de temperamenten van de derde kat.   Resultaat: Sensitive
console.log("Last Temparement cat 3:", catBreeds[2].temperament[4]);
// OR if the last number is unkonown
const tempCat3 = catBreeds[2].temperament.length;
console.log(
  "Last Temparament cat 3.length:",
  catBreeds[2].temperament[tempCat3 - 1]
);
// 5. Log het favoriete voedsel van de derde kat  Resultaat: meaty things
console.log("Favourite Food cat 3:", catBreeds[2].food.favourite_food);
