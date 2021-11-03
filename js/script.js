/*

TRACCIA: L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

*/


// 1. chiedo all'utente di scegliere il livello di difficoltà : 1, 2 o 3 => let levelChoice = prompt ()
    // 1.1 se l'utente sceglie livello 1 , genero una griglia di numeri con range 1-100/ griglia 10 x 10 
    // 1.2 se l'utente sceglie livello 2 , genero una griglia di numeri con range 1-81/ griglia 9 x 9 
    // 1.3 se l'utente sceglie livello 3 , genero una griglia di numeri con range 1-49/ griglia 7 x 7

// 3. creo funzione di callback per cambiare il colore della cella cliccata 



let gridContainer = document.getElementById("grid");

// chiedo all'utente di scegliere il livello di difficoltà : 1, 2 o 3 => let levelChoice = prompt ()
let levelChoice = parseInt(prompt ("Da quale livello vuoi partire: 1-facile, 2-intermedio o 3-difficile ?"));
console.log(levelChoice);


if(levelChoice === 1) {
    // griglia 10 x 10
    generateGrid(100, "square-l1" );
}else if(levelChoice === 2) {
    // griglia 9 x 9 
    generateGrid(81, "square-l2" );
} else if(levelChoice === 3) {
    // griglia 7 x 7 
    generateGrid(49, "square-l3" );
}


function generateGrid(blocksNumber, baseClass) {
    for (let i = 1; i <= blocksNumber; i++) {

        let node = document.createElement("div");
        node.classList.add("square", baseClass);
    
        node.addEventListener("click", 
            function(){
                node.classList.add("clicked-true", "mine");
                node.append(i);
            }
        );

        gridContainer.append(node);
    } 
}
    
