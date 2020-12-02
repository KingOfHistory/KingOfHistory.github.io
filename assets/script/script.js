
let overlay = document.getElementById("lightbox-overlay");
let poppedupimageid = "lightimage0";
let image1 = document.getElementById("image1");
let image7 = document.getElementById("image7");

function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	// TODO: Remove the .hidden class from the div with the given id
	document.getElementById(lightboxID).classList.remove('hidden');
}

image1.onclick = function unhideLightbox1() {
    unhideLightbox("lightimage1");
    poppedupimageid = "lightimage1";
}
image2.onclick = function() {
    unhideLightbox("lightimage2");
    poppedupimageid = "lightimage2";
}


image3.onclick = function () {
    unhideLightbox("lightimage3");
    poppedupimageid = "lightimage3";
}

image4.onclick = function() {
    unhideLightbox("lightimage4");
    poppedupimageid = "lightimage4";
}


image5.onclick = function() {
    unhideLightbox("lightimage5");
    poppedupimageid = "lightimage5";
}

image6.onclick = function() {
    unhideLightbox("lightimage6");
    poppedupimageid = "lightimage6";
}


image7.onclick = function() {
    unhideLightbox("lightimage7");
    poppedupimageid = "lightimage7";
}







// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
    // get every .lightbox div, getElementsByClassName gives us an array
    document.getElementById('lightbox-overlay').classList.add('hidden'); 
	document.getElementById(poppedupimageid).classList.add("hidden");
}


// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
overlay.onclick = function alert() {
    closeAllLightboxes();
}

