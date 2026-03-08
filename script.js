// Function called when mouse is over an image
function upDate(previewPic) {
    // Get the alt text from the hovered image
    var altText = previewPic.alt;
    
    // Get the source URL from the hovered image
    var imageUrl = previewPic.src;
    
    // Get the main display element
    var displayElement = document.getElementById("image");
    
    // Update the text content with alt text
    displayElement.innerHTML = altText;
    
    // Update the background image
    displayElement.style.backgroundImage = 'url("' + imageUrl + '")';
    
    // For debugging - check console (F12)
    console.log("Image Alt:", altText);
    console.log("Image URL:", imageUrl);
}

// Function called when mouse leaves an image
function undo() {
    // Get the main display element
    var displayElement = document.getElementById("image");
    
    // Reset the text to original
    displayElement.innerHTML = "Hover over an image below to display here.";
    
    // Reset the background image to empty
    displayElement.style.backgroundImage = "url('')";
    
    // For debugging
    console.log("Image reset to default");
}