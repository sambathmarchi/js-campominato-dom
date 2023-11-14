
let play = document.getElementById("buttonPlay")

let containerMain = document.getElementById("container_main")

let level = document.getElementById("level");

let cellaFortunata;
 
const gameOver = document.getElementById("gameOver");

let bombe = [];
let giocoChiuso = false;

let playAgain = document.getElementById("playAgain");

play.addEventListener("click", function () {
    containerMain.innerHTML = ""
    gameOver.classList.remove("d-visible");
    gameOver.classList.add("d-none");
    giocoChiuso = false;
    console.log(giocoChiuso);
    bombe = []

    if (level.value == "easy") {
        console.log("selezionato easy");
        bombeFino(100)
        console.log("le bombe sono:", bombe);
        generaGriglia(100, "square_easy", bombe);
    } else if (level.value == "med") {
        console.log("selezionato med");
        bombeFino(81)
        console.log("le bombe sono:", bombe);
        generaGriglia(81, "square_medium", bombe)
    } else {
        bombeFino(49)
        console.log("le bombe sono:", bombe);
        generaGriglia(49, "square_hard", bombe)
    }

})

function generaGriglia(numeroCelle, className, bombe) {
    for (let i = 1; i <= numeroCelle; i++) {
        const div = document.createElement("div");
        div.classList.add(className);
        containerMain.appendChild(div);
        div.innerHTML = i;

        div.addEventListener("click", function () {
            
            if (!giocoChiuso) {
                console.log(i);
                div.classList.toggle("square_bg");


                if (bombe.includes(i)) {
                    div.classList.remove("square_bg")
                    div.classList.add("bg_red")
                    gameOver.classList.remove("d-none")
                    gameOver.classList.add("d-visible")
                    giocoChiuso = true;     
                    console.log(giocoChiuso);        
                }
            }
            
        });
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function bombeFino(numeroCasualeBombe) {
    for (let i = 1; i < 17; i++) {
        let bombeCasuali = getRndInteger(1, numeroCasualeBombe);
    
        bombe.push(bombeCasuali)
        
    }
    
}
  

playAgain.addEventListener("click", function () {
    containerMain.innerHTML = "" 
    gameOver.classList.remove("d-visible");
    gameOver.classList.add("d-none");
    giocoChiuso = false;
    console.log(giocoChiuso);
    bombe = []
})