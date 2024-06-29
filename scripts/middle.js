let popularCuisines =
  "<div class='explore-options-inside-div'><div>American food near me</div>&#x2022;<div>Arabian food near me</div>&#x2022;<div>Bakery food near me</div>&#x2022;<div>Beverages food near me</div>&#x2022;<div>Biryani food near me</div>&#x2022;<div>Burger food near me</div>&#x2022;<div>Chinese food near me</div>&#x2022;<div>Desserts food near me</div>&#x2022;<div>Ice Cream food near me</div>&#x2022;<div>Juices food near me</div>&#x2022;<div>Kebab food near me</div>&#x2022;<div>Kerala food near me</div>&#x2022;<div>Mughlai food near me</div>&#x2022;<div>North Indian food near me</div>&#x2022;<div>Pizza food near me</div>&#x2022;<div>Salad food near me</div>&#x2022;<div>Sandwich food near me</div>&#x2022;<div>Shake food near me</div>&#x2022;<div>South Indian food near me</div>&#x2022;<div>Street food near me</div> </div>";

let popularCuisinesDiv = document.querySelector(".popularCuisinesDiv");

let popularCuisinesFlag = false;

const displayPopularCuisines = () => {
  if (!popularCuisinesFlag) {
    popularCuisinesDiv.innerHTML = popularCuisines;
    popularCuisinesFlag = true;
    arrow = document.querySelector(".arrow1").classList.add("right-arrow");
  } else {
    popularCuisinesDiv.innerHTML = "";
    popularCuisinesFlag = false;
  }
};

let popularRestaurants =
  "<div class='explore-options-inside-div'><div>Bakeries near me</div> <div>&#x2022;</div> <div>Beverage Shops near me</div> <div>&#x2022;</div> <div>Bhojanalya near me</div> <div>&#x2022;</div> <div>Casual Dining near me</div> <div>&#x2022;</div> <div>Dessert Parlors near me</div> <div>&#x2022;</div> <div>Food Courts near me</div> <div>&#x2022;</div> <div>Lounges near me</div> <div>&#x2022;</div> <div>Quick Bites near me</div></div>";

let popularRestaurantsDiv = document.querySelector(".popularRestaurantsDiv");

let popularRestaurantsFlag = false;

const displayPopularRestaurants = () => {
  if (!popularRestaurantsFlag) {
    popularRestaurantsDiv.innerHTML = popularRestaurants;
    popularRestaurantsFlag = true;
    arrow = document.querySelector(".arrow2").classList.add("right-arrow");
  } else {
    popularRestaurantsDiv.innerHTML = "";
    popularRestaurantsFlag = false;
  }
};

let citiesDelivered =
  "<div class='cities-delivered'><div>Delhi NCR</div> <div>Kolkata</div> <div>Mumbai</div> <div>Bengaluru</div> <div>Pune</div> <div>Hyderabad</div> <div>Chennai</div> <div>Lucknow</div> <div>Kochi</div> <div>Jaipur</div> <div>Ahmedabad</div> <div>Chandigarh</div> <div>Goa</div> <div>Indore</div> <div>Gangtok</div> <div>Nashik</div> <div>Ooty</div> <div>Shimla</div> <div>Ludhiana</div> <div>Guwahati</div> <div>Amritsar</div> <div>Kanpur</div> <div>Allahabad</div> <div>Aurangabad</div> <div>Bhopal</div> <div>Ranchi</div> <div>Visakhapatnam</div> <div>Bhubaneswar</div> <div>Coimbatore</div> <div>Mangalore</div> <div>Vadodara</div> <div>Nagpur</div> <div>Agra</div> <div>Dehradun</div> <div>Mysore</div> <div>Puducherry</div> <div>Surat</div> <div>Varanasi</div> <div>Patna</div> <div>Udaipur</div> <div>Srinagar</div> <div>Khajuraho</div> <div>Neemrana</div> <div>Cuttack</div> <div>Trivandrum</div> <div>Haridwar</div> <div>Leh</div> <div>Pushkar</div> <div>Rajkot</div> <div>Madurai</div> <div>Kozhikode</div> <div>Alappuzha</div> <div>Thrissur</div> <div>Manipal</div> <div>Vijayawada</div> <div>Jodhpur</div> <div>Kota</div> <div>Ajmer</div> <div>Mussoorie</div> <div>Rishikesh</div> <div>Jalandhar</div> <div>Jammu</div> <div>Manali</div> <div>All delivery cities</div></div>";

let citiesDeliveredDiv = document.querySelector(".citiesDeliveredDiv");

let citiesDeliveredFlag = false;

const displayCitiesDelivered = () => {
  if (!citiesDeliveredFlag) {
    citiesDeliveredDiv.innerHTML = citiesDelivered;
    citiesDeliveredFlag = true;
    arrow = document.querySelector(".arrow3").classList.add("right-arrow");
  } else {
    citiesDeliveredDiv.innerHTML = "";
    citiesDeliveredFlag = false;
  }
};
