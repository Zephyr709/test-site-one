//Javascript comment

/**
 * Another JavaScript comment
 */

const myImage = document.querySelector('img');

myImage.onclick = (event) => {
    const mySrc =myImage.getAttribute("src");
    if (mySrc ==="images/black-hole-1.jpg") {
        myImage.setAttribute("src", "images/black-hole-2.jpg")
    }
    else {
        myImage.setAttribute("src", "images/black-hole-1.jpg")
    }
}

let myButton = document.querySelector("button");
let myHeading2 = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading2.textContent = `Welcome back, ${myName}`;
}

/*if(!localStorage.getItem("name")) {
    setUserName();
} else{
    const storedName = localStorage.getItem("name");
    if(storedName !== null){
        myHeading2.textContent = `Welcome back, ${storedName}`;
    }
}*/

myButton.onclick = (event) => {
    setUserName();
}