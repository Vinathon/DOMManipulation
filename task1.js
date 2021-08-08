let mainDiv = document.createElement("div");
let button = document.createElement("input")
let label = document.createElement("label");

button.setAttribute("type", "button");
button.setAttribute('class', 'btn btn-primary');
button.innerHTML = "click";
button.addEventListener('click', randomNumberGenerator);

function randomNumberGenerator(){
    var randomNumbers =  Math.floor(Math.random() * 100000000);
    label.innerHTML = randomNumbers;
    // return randomNumbers;
}

mainDiv.append(button);
mainDiv.append(label);
document.body.append(mainDiv);
