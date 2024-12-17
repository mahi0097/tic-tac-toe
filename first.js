const boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
const winners = document.querySelector(".wineer");
const new_game = document.querySelector(".new-game"); 

let turn = true;
const win_pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turn = true;
    enabled_boxes();
    winners.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turn){
            box.innerHTML = "0";
            turn = false;
        }else{
           box.innerHTML = "x";
           turn = true;
        }
        box.disabled = true;
        checkwinner();
    });
  });
const checkwinner = () => {
    for (pattern of win_pattern){
        let pattern1 = boxes[pattern[0]].innerText;
        let pattern2 = boxes[pattern[1]].innerText;
        let pattern3 = boxes[pattern[2]].innerText;
        if (pattern1 != "" && pattern2 != "" && pattern3 != ""){
            if (pattern1 === pattern2 && pattern2 === pattern3){
                console.log("winner",pattern1);
                winners_given();
            }
        }

    }
} 
const disabled_boxes = () => {
    for (let box of boxes){
        box.disabled = true;
        boxes.innerHTML ="";
    }
}
const enabled_boxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerHTML ="";
    }
}
const winners_given = () => {
    winners.innerHTML = "wineer";
    winners.classList.remove("hide");
    disabled_boxes();
  } 
new_game.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
  
  