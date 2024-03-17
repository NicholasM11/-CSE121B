/* W02-Task - Profile Home Page */
const fullName = "Nicholas Mendez";
let currentYear = new Date().getFullYear();
let profilePicture = "images/nicholas.jpg";
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("profileImage");
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

let favoriteFoods = ["Pizza", "Mangu", "Domplins"];

foodElement.innerHTML = favoriteFoods.join("<br>");

let newFavoriteFood = "Ice Cream";

favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

favoriteFoods.shift();

foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

favoriteFoods.pop();

foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");
