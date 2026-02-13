
var type = new Typed(".text", {
    strings: ["Wel come to my portifolio", "2024", "jimma university", "..."],
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
document.getElementById("date").value = formattedDate;
