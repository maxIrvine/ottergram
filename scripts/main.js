var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_URL_SELECTOR = '[data-image-url]';

function switchImage() {
    var images = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var current = document.querySelector(DETAIL_IMAGE_SELECTOR);
    images.forEach(function (image){
        image.addEventListener('click', function (event){
            event.preventDefault();
            // changing the image to the image click on
            current.setAttribute('src', image.getAttribute('href'));
        });
    });
}

function switchText() {
    var images = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var current = document.querySelector(DETAIL_TITLE_SELECTOR);
    images.forEach(function (image) {
        image.addEventListener('click', function (event){
            var title = image.getAttribute('data-image-title');
            current.textContent = title;
        });
    });
}

function main() {
    switchImage();
    switchText();
}

main();