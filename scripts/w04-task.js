/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
  name: "Nicholas Mendez",
  photo: "images/nicholas.jpg",
  favoriteFoods: ["Pizza", "Sushi", "Tacos"],
  hobbies: ["Playing Guitar", "Reading", "Traveling"],
  placesLived: [],
};

myProfile.placesLived.push({ place: "Nicaragua", length: "2 years" });
myProfile.placesLived.push({ place: "Dominican Republic", length: "24 years" });

document.getElementById("name").textContent = myProfile.name;

let photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

let favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
});

let hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
    let listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
});

let placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});
