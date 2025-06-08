let boxes = document.querySelectorAll('.box');
let newgame = document.querySelector('#btn');
let msg = document.querySelector('.msg-container');

let turn = true; // true = O's turn, false = X's turn

const winpattern = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [1, 4, 7], [2, 5, 8], [2, 4, 6],
  [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.innerHTML === '') {
    if(turn==true){
        box.innerHTML='O';
        turn=false;
    }
    else{
        box.innerHTML='X';
        turn=true;
    }
}
    checkwinner()
  });
});
function disablebtn(){
    for(let box of boxes){
       box.style.pointerEvents = "none"; // ✅ Disables clicking on the box
    }
}
function enablebtn(){
    for(let box of boxes){
       box.style.pointerEvents = "auto"; // enable click
       box.innerHTML='';
       msg.classList.remove('show');
    }
}
function resetgm(){
    turn=true;
    enablebtn()
}
function showwinner(winner) {
  msg.innerHTML = `🎉 Congrats, Winner is ${winner}`;
  msg.classList.add("show"); // ✅ FIXED: `classList`, not `classlist`
  disablebtn()
}

function checkwinner(){
    for(let pattern of winpattern){
      let posval1=boxes[pattern[0]].innerHTML
      let posval2=boxes[pattern[1]].innerHTML
      let posval3=boxes[pattern[2]].innerHTML

      if(posval1 !=''&&posval2 !=''&&posval3 !=''){
        if (posval1 === posval2 && posval2 === posval3) {
  showwinner(posval1);
}
      }
    }
}

newgame.addEventListener('click',resetgm)
