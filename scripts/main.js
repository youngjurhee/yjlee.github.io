let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');

    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please Enter user Name');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozila is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozila is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}