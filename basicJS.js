// VScode automatically uses copilot for inline code generation and used ChatGPT for reversing the array and car objects.

var counter = 0;
function tickUp(){
    counter++;
    document.getElementById("counter").textContent = counter;
}
function tickDown(){
    counter--;
    document.getElementById("counter").textContent = counter;
}

function runForLoop(){
    for (let i = 0; i <= counter; i++){
        document.getElementById("forLoopResult").textContent += " " + i;
    }
}

function showOddNumbers(){
    let result = "";
    for (let i = 0; i <= counter; i++){
        if (i % 2 === 1){
            result += " " + i;
        }
    }
    document.getElementById("oddNumberResult").textContent = result;
}

function addMultiplesToArray(){
    let multiples = [];
    for (let i = counter; i >= 1; i--){
        if (i % 5 === 0){
            multiples.push(i);
        }
    }
    console.log(multiples);
}

function printCarObject(){
    const type = document.getElementById("carType").value;
    const mpg = document.getElementById("carMPG").value;
    const color = document.getElementById("carColor").value;

    const car = {
        type: type,
        mpg: mpg,
        color: color
    }
    console.log(car);
}

function loadCar(num){
    if (num === 1) {
        car = car1;
    } else if (num === 2) {
        car = car2;
    } else if (num === 3) {
        car = car3;
    }
    document.getElementById("carType").value = car.type;
    document.getElementById("carMPG").value = car.mpg;
    document.getElementById("carColor").value = car.color;
}


function changeColor(num){
    document.getElementById("styleParagraph");
    if (num === 1){
        document.getElementById("styleParagraph").style.color = "red";
    }else if (num === 2){
        document.getElementById("styleParagraph").style.color = "green";
    }else if (num === 3){
        document.getElementById("styleParagraph").style.color = "blue";
    }
}

