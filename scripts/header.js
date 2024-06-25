//location-tooltip
const image = document.getElementById("location-box");
const tooltip = document.getElementById("location-tooltip");

image.addEventListener("click", function () {
  if (tooltip.style.display === "block") {
    tooltip.style.display = "none";
  } else {
    tooltip.style.display = "block";
  }
});

//account-tooltip
const icon = document.getElementById("tooltip-icon");
const accountTooltip = document.getElementById("account-tooltip-div");

icon.addEventListener("click", function () {
  if (accountTooltip.style.display === "block") {
    accountTooltip.style.display = "none";
  } else {
    accountTooltip.style.display = "block";
  }
});
