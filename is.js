// ImageSwap JS

// This is my array of img sources
var ducky = ["images/duck0.png", "images/duck1.png", "images/duck2.png", "images/duck3.png" ];
var title = ["Ballerina", "CowBoy", "Pirate", "Sucba Diver"];
var desc = ["The Ballerina goes SHHHHHHHHH", "The Cowboy goes Theres a Snake in My Boot","The Pirate goes Arrrggghhhh", "The Scuba Diver goes Blub Blub Blub"];
  

// Get and Set the main image
var main = document.getElementById("main");
main.src = ducky[0];

// Creat a timer that calls a image swap function
myTimer = setInterval(swapRandomImage, 1000);


// fill the images that the child will select from
function fillImages()
{
    for (var index = 0; index < ducky.length; index++)
        {
            document.getElementById("thumb-" + index).src = ducky[index];
        }
}

// This will allow the child to pic an image
function swapImages(pic)
{
    //
    main.src = ducky[pic];
    mainTitle.innerHTML = title[pic];
    mainPara.innerHTML = desc[pic];
}

// This will allow the page to randomly display images
function swapRandomImage()
{
    var rand = Math.floor(Math.random() * 4);
    main.src = ducky[rand];
    mainTitle.innerHTML = title[rand];
    mainPara.innerHTML = desc[rand];
}

// When the main image is clicked it will stop looping
function endRandomSwap()
{
    clearInterval(myTimer);
}

// Event listenres
window.addEventListener("load", fillImages, false);
main.addEventListener("click", endRandomSwap, false);