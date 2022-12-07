let drDoom = 0;
let magneto = 0;
let joker = 0;
var next = 0;

const banan = document.getElementById("finalResult");
const banan2 = document.getElementsByClassName("cool:hover")

const skurkar = { joker: 0, doom: 0, magneto: 0 }

var currentTab = 0;

showTab(currentTab);

const finalVillain = document.getElementById("finalVillain");


function goToNextQ() {
    
    const villain = document.querySelectorAll("input:checked")[next].value
    if (villain == "Magneto") {
        skurkar.magneto++
    } else if (villain == "Doom") {
        drDoom++
    } else if (villain == "Joker") {
        joker++
    }
    next++
    
    console.log(villain)
    
    console.log(`Joker: ${skurkar.joker}, Doom: ${skurkar.doom}`)
    console.log("Joker: " + joker)
    console.log("Doom: " + drDoom)
    console.log("Magneto: " + magneto)
    
    nextPrev()
    
}

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    currentTab += 1
    showTab(currentTab);

}

function hideButton(button) {
    button.style.display = "none";
}

function showButton(button) {
    button.style.display = "block";
}

function result() {
    
    finalVillain.src = "kraven.jpg"
    
    /*     let results = 0;
    
    for (let i = 0; i <= drDoom || i <= joker || i <= magneto; i++) {
        results = i;
    }
    
    if (results == drDoom) {
        console.log("Doom wins")
        banan.innerHTML = "Doom wins";        
    }
    
    if (results == joker) {
        console.log("Joker wins")
        banan.innerHTML = "Joker wins";
    }

    if (results == magneto) {
        console.log("Magneto wins")
        banan.innerHTML = "Magneto wins"
    } */
}

