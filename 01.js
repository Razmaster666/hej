let drDoom = 0;
let harley = 0;
let jabba = 0;
let jafar = 0;

var next = 0;

const banan = document.getElementById("finalResult");
const banan2 = document.getElementsByClassName("cool:hover")

var currentTab = 0;

showTab(currentTab);

const finalVillain = document.getElementById("finalVillain");


function goToNextQ() {

    const villain = document.querySelectorAll("input:checked")[next].value

    if (villain == "Doom") {
        drDoom++
    } else if (villain == "Quinn") {
        harley++
    } else if (villain == "Jafar") {
        jafar++
    } else if (villain == "Hutt") {
        jabba++
    }

    next++

    console.log(villain + " gets one point")

    console.log("Jafar: " + jafar)
    console.log("Doom: " + drDoom)
    console.log("Hutt: " + jabba)
    console.log("Quinn: " + harley)

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

  /*   finalVillain.src = "kraven.jpg" */

      let results = 0;
    
    for (let i = 0; i <= drDoom || i <= harley || i <= jabba || i <= jafar; i++) {
        results = i;
    }
    
    if (results == drDoom) {
        console.log("Doom wins")
        banan.innerHTML = "You are Dr Doom! Your intellect is superior to that of others, but it comes with a backside of vanity. You possess an iron will and are fit to lead!";        
    }
    
    if (results == harley) {
        console.log("Harley wins")
        banan.innerHTML = "You are Harley Quinn! You are bubbly, energetic and charming. Chaos tends to follow you wherever you go. You have an easy time falling in love, but be careful as the love might consume you!";
    }

    if (results == jafar) {
        console.log("Jafar wins")
        banan.innerHTML = "You are Jafar! A master of manipulation and the mystic arts, you are a formidable person in every respect. You have a high opinion of yourself, perhaps a bit unearned. Your smile lights up every room."
    }

    if (results == jabba) {
        console.log("Jabba wins")
        banan.innerHTML = "You are Jabba the Hutt! Your love of money and power knows no bounds, and you are prone to give into both lust and gluttony. The friends you keep are a ragged bunch. You are easily distracted by girls in bikinis."
    }
}

