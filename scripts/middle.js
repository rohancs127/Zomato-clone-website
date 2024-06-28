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

const displayPopularRestaurants = ()=>{
  if (!popularRestaurantsFlag) {
    popularRestaurantsDiv.innerHTML = popularRestaurants;
    popularRestaurantsFlag = true;
    arrow = document.querySelector(".arrow2").classList.add("right-arrow");
  } else {
    popularRestaurantsDiv.innerHTML = "";
    popularRestaurantsFlag = false;
  }
}

let citiesDelivered = "Delhi NCR Kolkata Mumbai Bengaluru Pune Hyderabad Chennai Lucknow Kochi Jaipur Ahmedabad Chandigarh Goa Indore Gangtok Nashik Ooty Shimla Ludhiana Guwahati Amritsar Kanpur Allahabad Aurangabad Bhopal Ranchi Visakhapatnam Bhubaneswar Coimbatore Mangalore Vadodara Nagpur Agra Dehradun Mysore Puducherry Surat Varanasi Patna Udaipur Srinagar Khajuraho Neemrana Cuttack Trivandrum Haridwar Leh Pushkar Rajkot Madurai Kozhikode Alappuzha Thrissur Manipal Vijayawada Jodhpur Kota Ajmer Mussoorie Rishikesh Jalandhar Jammu Manali All delivery cities"