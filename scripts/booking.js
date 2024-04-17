/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var cost_per_day = 35;
var days_selected = 0;

// creating an array for "business days"
var business_days = [document.getElementById("monday"), document.getElementById("tuesday"), document.getElementById("wednesday"), document.getElementById("thursday"), document.getElementById("friday")];
var clearBtn = document.getElementById("clear-button");
var half_days = document.getElementById("half");
var full_days = document.getElementById("full");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clicked (day) {
    if (!day.classList.contains("clicked")){
        day.classList.add("clicked");
        days_selected += 1;
        ServiceCost();
    }
}

business_days[0].addEventListener("click", function () {clicked(business_days[0]);});
business_days[1].addEventListener("click", function () {clicked(business_days[1]);});
business_days[2].addEventListener("click", function () {clicked(business_days[2]);});
business_days[3].addEventListener("click", function () {clicked(business_days[3]);});
business_days[4].addEventListener("click", function () {clicked(business_days[4]);});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function reset () {
    for (var i = 0; i < business_days.length; i++){  
        business_days[i].classList.remove("clicked");
    }  
    days_selected = 0;
    ServiceCost();
}
clearBtn.addEventListener("click", reset);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function serviceHalfDay () {
    cost_per_day = 20;
    ServiceCost();
    half_days.classList.add("clicked");
    full_days.classList.remove("clicked");
}
half_days.addEventListener("click", serviceHalfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function serviceFullDay () {
    cost_per_day = 35;
    ServiceCost();
    full_days.classList.add("clicked");
    half_days.classList.remove("clicked");
}
full_days.addEventListener("click", serviceFullDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function ServiceCost(){
    let totalCost = document.getElementById("calculated-cost");
    totalCost.innerHTML = cost_per_day * days_selected;
}