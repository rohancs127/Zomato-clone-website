let popularCuisines =
  "<div class='popular-cuisines'><div>American food near me</div>&#x2022;<div>Arabian food near me</div>&#x2022;<div>Bakery food near me</div>&#x2022;<div>Beverages food near me</div>&#x2022;<div>Biryani food near me</div>&#x2022;<div>Burger food near me</div>&#x2022;<div>Chinese food near me</div>&#x2022;<div>Desserts food near me</div>&#x2022;<div>Ice Cream food near me</div>&#x2022;<div>Juices food near me</div>&#x2022;<div>Kebab food near me</div>&#x2022;<div>Kerala food near me</div>&#x2022;<div>Mughlai food near me</div>&#x2022;<div>North Indian food near me</div>&#x2022;<div>Pizza food near me</div>&#x2022;<div>Salad food near me</div>&#x2022;<div>Sandwich food near me</div>&#x2022;<div>Shake food near me</div>&#x2022;<div>South Indian food near me</div>&#x2022;<div>Street food near me</div> </div>";

let popularCuisinesDiv = document.querySelector(".popularCuisinesDiv");

let popularCuisinesFlag = false;

const displayInfo = () => {
  if (!popularCuisinesFlag) {
    popularCuisinesDiv.innerHTML = popularCuisines;
    popularCuisinesFlag = true;
  }
  else {
    popularCuisinesDiv.innerHTML = "";
    popularCuisinesFlag = false;
  }
};
