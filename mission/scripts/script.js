
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

let image = document.querySelector("img");

let mission = document.querySelector(".mission");

let line = document.querySelector("hr");

let byui = document.querySelector("h2");

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "white";
        image.setAttribute("src", "images/byui-logo-white.png");
        mission.style.borderColor =  "white"; 
        line.style.backgroundColor = "white";
        byui.style.color = "#9cd6ff";
        
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        image.setAttribute("src", "images/byui-logo-blue.webp")
        mission.style.borderColor = "";
        line.style.backgroundColor = "";
        byui.style.color = "";
        
    }
}           
                    