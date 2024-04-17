// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submitBtn = document.getElementById("submit-button");
var contact_page = document.getElementById("contact-page");

submitBtn.addEventListener("click", replace);

function replace () {
    contact_page.innerHTML = "Thank you for your message!";
}