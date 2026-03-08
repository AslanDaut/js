// Initialize gallery when page loads
function initGallery() {
    console.log("Gallery initialized - onload event triggered");
    addTabIndex();
}

// Add tabindex to all images using a for loop
function addTabIndex() {
    var images = document.querySelectorAll('.thumbnails img');
    
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Added tabindex to image " + (i + 1) + ": " + images[i].alt);
    }
    
    console.log("Total images with tabindex: " + images.length);
}

// Function called when mouse is over an image OR when image receives focus
function upDate(previewPic) {
    // Get the alt text from the hovered/focused image
    var altText = previewPic.alt;
    
    // Get the source URL from the hovered/focused image
    var imageUrl = previewPic.src;
    
    // Get the main display element
    var displayElement = document.getElementById("image");
    
    // Update the text content with alt text
    displayElement.innerHTML = altText;
    
    // Update the background image
    displayElement.style.backgroundImage = 'url("' + imageUrl + '")';
    
    // For debugging - check console (F12)
    console.log("Image displayed - Alt: " + altText);
    console.log("Image URL: " + imageUrl);
}

// Function called when mouse leaves an image OR when image loses focus
function undo() {
    // Get the main display element
    var displayElement = document.getElementById("image");
    
    // Reset the text to original
    displayElement.innerHTML = "Hover over or tab to an image below to display here.";
    
    // Reset the background image to empty
    displayElement.style.backgroundImage = "url('')";
    
    // For debugging
    console.log("Image reset to default state");
}
