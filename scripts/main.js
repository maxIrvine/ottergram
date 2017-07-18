var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_URL_SELECTOR = '[data-image-url]';

var images = [
    {
        href: 'img/otter1.jpg',
        text: 'Barry',
        alt: 'Barry the Otter'
    },
    {
        href: 'img/otter2.jpg',
        text: 'Robin',
        alt: 'Robin the Otter'
    },
    {
        href: 'img/otter3.jpg',
        text: 'Maurice',
        alt: 'Maurice the Otter'
    },
    {
        href: 'img/otter4.jpg',
        text: 'Lesley',
        alt: 'Lesley the Otter'
    },
    {
        href: 'img/otter5.jpg',
        text: 'Barbs',
        alt: 'Barbara the Otter'
    }
];

function getRandomIndex() {
    var len = getImagesArray().length;
    var randInt = Math.round(Math.random() * len);
    return randInt;
}

function getImagesArray() {
    return [].slice.call(document.querySelectorAll(THUMBNAIL_LINK_SELECTOR));
    // return images;
}

function getClickedImage() {
    return document.querySelector(DETAIL_IMAGE_SELECTOR);
}

function getClickedTitle() {
    return document.querySelector(DETAIL_TITLE_SELECTOR);
}

function listener() {
    buildTags();
    var images = getImagesArray();
    console.log(images);
    return images.forEach(listenerHelper);
}

function buildTags() {
    var thumbnailList = document.querySelector('.thumbnail-list');
    images.forEach(function (image){
        //list
        var imageList = document.createElement('li');
        imageList.setAttribute('class', 'thumbnail-item');
        //a tag
        var imageAElement = document.createElement('a');
        imageAElement.setAttribute('href', image.href);
        imageAElement.setAttribute('data-image-role', "trigger");
        imageAElement.setAttribute('data-image-title', image.alt);
        //img
        var imageElement = document.createElement('img');
        imageElement.setAttribute('class', 'thumbnail-image');
        imageElement.setAttribute('src', image.href);
        imageElement.setAttribute('alt', image.alt);
        //span
        var imageSpan = document.createElement('span');
        imageSpan.setAttribute('class', 'thumbnail-title');
        imageSpan.textContent = image.text;
        thumbnailList.appendChild(imageList);
        imageList.appendChild(imageAElement);
        imageAElement.appendChild(imageElement);
        imageAElement.appendChild(imageSpan);
    });
}

function setDetails(image) {
    var images = getImagesArray();
    var image = images[getRandomIndex()];
    console.log(image);
    getClickedImage().setAttribute('src', image.getAttribute('href'));
    getClickedTitle().textContent = image.getAttribute('data-image-title');
}

function listenerHelper(image) {
    image.addEventListener('click', function (event) {
        event.preventDefault();
        setDetails(image);
    });
}

function main() {
    listener();
}

main();