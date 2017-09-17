// ImageSwap JS

// This is my array of img sources
var ducky = ["images/duck0.png", "images/duck1.png", "images/duck2.png", "images/duck3.png" ];
var title = ["Ballerina", "CowBoy", "Pirate", "Sucba Diver"];
var desc = ["The Ballerina goes SHHHHHHHHH", "The Cowboy goes Theres a Snake in My Boot","The Pirate goes Arrrggghhhh", "The Scuba Diver goes Blub Blub Blub"];
  

// I am grabbing the elements by their ID's and storing them in DOM variables
var main = document.getElementById("main");


// As I understood the instructions I was allowed to have a signle method that must be shared by all four 
// of my IMG's. The idea here was when this method fired it would figure out which image was clicked and 
// set the source of the larger image using the array.
// Finding a way to determine which img was clicked from a single method is where I am stuck at.
function swapImages(pic)
{
    //
    if (pic === 0)// Only this if and the one below it are working. Once these two work I will add the other two.
    {
        main.src = ducky[pic];
        mainTitle.innerHTML = title[pic];
        mainPara.innerHTML = desc[pic];
    }
    else if (pic === 1)// I had attempted .click and clicked with no luck
    {
        main.src = ducky[pic];
        mainTitle.innerHTML = title[pic];
        mainPara.innerHTML = desc[pic];
    }
    else if (pic === 2)
    {
        main.src = ducky[pic];
        mainTitle.innerHTML = title[pic];
        mainPara.innerHTML = desc[pic];
    }
    else if (pic === 3)
    {
        main.src = ducky[pic];
        mainTitle.innerHTML = title[pic];
        mainPara.innerHTML = desc[pic];
    }


}