let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector(".newbtn");
let msgcontiner = document.querySelector(".msg-continer");
let msg = document.querySelector(".msg");



let turnO = true;
let winningpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    })
});
let checkwinner = () => {
    for (let pattern of winningpattern) {
        console.log([pattern[0]], [pattern[1]], [pattern[2]])
        console.log(
            pos1 = boxes[pattern[0]].innerText,
            pos2 = boxes[pattern[1]].innerText,
            pos3 = boxes[pattern[2]].innerText)

        if (pos1 != "" & pos2 != "" & pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
            }
        }

    }
}


const showwinner = (winner) =>{
    msg.innerText = `congratulations! winner is ${winner}` ;
    msgcontiner.classList.remove("hide");
    disableboxes();
}

let disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let resetgame=()=>{
    trueO=true;
    enableboxes();
    msgcontiner.classList.add("hide");
};


let enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);



