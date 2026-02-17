// main.js – copy your existing JS here
var type = new Typed(".text", {
    strings: ["Welcome to my portfolio", "2024", "Jimma University", "..."],
    typeSpeed: 80,
    backSpeed: 200,
    backDelay: 1000,
    loop: true
});

const elements = document.querySelectorAll('.home-section a');
elements.forEach((element, index) => {
    element.style.setProperty('--delay', `calc(0.2s * ${index + 1})`);
});

var currentDate = new Date();
var monthAbbreviations = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
var formattedDate = monthAbbreviations[currentDate.getMonth()] + "-" + currentDate.getDate() + "-" + currentDate.getFullYear();
// If you have an element with id="date", it will be set; otherwise you can remove or adjust.
// document.getElementById("date").value = formattedDate;