/*
 * gallery.js
 * Taken from https://dev.to/wepukhulutimothy/image-gallery-with-vanilla-javascript-518g
 */

// Gererating images array
let spots = data.spots;
let uicontainer = document.getElementById("gallery--images");
let currentImg = document.getElementById("current");
for (let item in spots) {
    if (spots[item].code == instanceState.spotcode) {
        let images = spots[item].metadata.gallery_pics;
        currentImg.setAttribute("src", images[0]);
        for (let img in images) {
            let image = document.createElement("img");
            image.setAttribute("src", images[img]);
            image.setAttribute("class", "img");
            uicontainer.appendChild(image);
        }
    }
}


// Generating current image


let current = document.getElementById("current");
let opacity = 0.6;
let imgs = document.querySelectorAll(".img");

imgs.forEach(img => {
  img.addEventListener("click", (e) => {
    //reset opacity
    imgs.forEach(img => {img.style.opacity = 1;
    });
  current.src = e.target.src;
  //adding class 
  //current.classList.add("fade-in");
  //opacity
  e.target.style.opacity = opacity; 
  });
});

/*
 * Modal fullscreen popup window
 * Taken from: https://www.w3schools.com/howto/howto_css_modal_images.asp
 */

// Get the modal
var modal = document.getElementById("gallery-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("current");
var modalImg = document.getElementById("gallery-image");
/* Don't need caption right now */
// var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    document.body.style.overflow = "hidden";
    /* Don't need caption right now */
    // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("uix-button--gallery--close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "scroll";
}