// const myImage = document.querySelector('img');
// myImage.onclick = () => {
//     const mySrc = myImage.getAttribute("src");
//     if (mySrc === "images/firefox2.png")
//         myImage.setAttribute("src", "images/firefox-icon.png");
//     else if(mySrc === "images/firefox-icon.png")
//         myImage.setAttribute("src", "images/firefox2.png");
// };
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt("Enter your name...");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}`;
}

if (!localStorage.getItem("name"))
    setUserName();
else {
    const myName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${myName}`;
}

myButton.onclick = () => setUserName();