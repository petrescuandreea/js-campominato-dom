/*

TRACCIA: L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

*/


// 1. chiedo all'utente di scegliere il livello di difficoltà : 1, 2 o 3 => let levelChoice = prompt ()
    // 1.1 se l'utente sceglie livello 1 , genero una griglia di numeri con range 1-100/ griglia 10 x 10 
        // genero un array di 16 numeri(bombe) nel range di difficoltà
            // i numeri devono essere casuali 
            // i numeri devono essere univoci
    // 1.2 se l'utente sceglie livello 2 , genero una griglia di numeri con range 1-81/ griglia 9 x 9 
    // 1.3 se l'utente sceglie livello 3 , genero una griglia di numeri con range 1-49/ griglia 7 x 7

// 3. creo funzione di callback per cambiare il colore della cella cliccata 


// variabili utili 
let gridContainer = document.getElementById("grid");
// variabile utile per tenere traccia dei click fatti dall'utente 
let click = 0 ; 



// chiedo all'utente di scegliere il livello di difficoltà : 1, 2 o 3 => let levelChoice = prompt ()
let levelChoice = parseInt(prompt ("Da quale livello vuoi partire: 1-facile, 2-intermedio o 3-difficile ?"));
console.log(levelChoice);

let  difficulty = 100;
if(levelChoice === 1) {
    // griglia 10 x 10
    difficulty = 100;
    generateGrid(100, "square-l1" );
   

}else if(levelChoice === 2) {
    // griglia 9 x 9 
    difficulty = 81;
    generateGrid(81, "square-l2" );

} else if(levelChoice === 3) {
    // griglia 7 x 7 
    difficulty = 49;
    generateGrid(49, "square-l3" );
}


function generateGrid(blocksNumber, baseClass) {
    for (let i = 1; i <= blocksNumber; i++) {

        let node = document.createElement("div");
        node.classList.add("square", baseClass);
        node.setAttribute("id", i);

        node.addEventListener("click", 
            function(){
                let countClick = ++click;
                console.log("numero di click" , countClick);
                node.classList.add("clicked-true");
                node.append(i);
                node.getAttribute("id");

                if(bombsArray.includes(i)) {
                    node.classList.remove("clicked-true");
                    node.classList.add("bomb");
                    console.log("hai perso");
                }
               
            }

        );

        gridContainer.append(node);
    } 
}



// array di 16 numeri(bombe) casuali univoci 
let bombsArray = [];
 while (bombsArray.length < 16) {
    let bomb = Math.floor(Math.random()*(difficulty) + 1);
    if (bombsArray.includes(bomb) === false) {
        bombsArray.push(bomb);
    }
    console.log(bombsArray);
 }
    
