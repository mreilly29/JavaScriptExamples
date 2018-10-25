// Make h1 in header have different text
var title = document.querySelector('h1');
    title.innerText='New Text';


// Make nav ul li elements get larger when you hover over them
var all = document.querySelectorAll('li')
all.forEach(function (li) {
    li.onmouseover = mouseOver;
});

function mouseOver() {
    this.style.fontSize = '50px';
}


// Add another element to the main element
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.querySelector("main");
var child = document.querySelector("p");
element.insertBefore(para, child);


// Dynamically change the color of the background on the footer when the user hovers over it
var howervar = document.querySelector("footer");

howervar.onmousemove = function () { this.style.backgroundColor = "#365890"; };
howervar.onmouseout = function () { this.style.backgroundColor = ""; };   

// Change the font size of the paragraphs in the main element when the user clicks them
var all = document.querySelectorAll('p')
all.forEach(function (p) {
    p.onclick = mouseOver;
});

function mouseOver() {
    this.style.fontSize = '20px';
}

// Change the text in the footer when the user clicks it
var foot = document.getElementById("foot");
foot.onclick = changeText;

function changeText() {
    this.innerText = 'Fred Flinstone';
}

// Remove the h1 element in the header
document.querySelector("h1").remove();

// Put something in the place of the h1 in the header (like an h2)
var para = document.createElement("h2");
var node = document.createTextNode("H1 REPLACEMENT.");
para.appendChild(node);

var element = document.querySelector("header");
var child = document.querySelector("nav");
element.insertBefore(para, child);


// Change the text in one of the paragraph tags in the main element
var item = document.querySelectorAll('p');
item[2].innerText = 'BEEP BOOP ';

// Change the size of the header element to 200px using grid syntax
var topBox = document.querySelector('.container');
topBox.style.gridTemplateRows = "200px"