// Make h1 in header have different text
var title = document.querySelector('h1');
    title.innerText='New Text';


// Make nav ul li elements get larger when you hover over them
var all = document.querySelectorAll('li')

//for (var i in all) {
  //  all[i].onmouseover = mouseOver;
//}

all.forEach(function (li) {
    li.onmouseover = mouseOver;
});

function mouseOver() {
    this.style.fontSize = '50px';
}


// Add another element to the main element

// Dynamically change the color of the background on the footer when the user hovers over it

// Change the font size of the paragraphs in the main element when the user clicks them

// Change the text in the footer when the user clicks it

// Remove the h1 element in the header

// Put something in the place of the h1 in the header (like an h2)

// Change the text in one of the paragraph tags in the main element

// Change the size of the header element to 200px using grid syntax
