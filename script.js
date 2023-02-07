let bg_music = new Audio("Date2.mp3");

let ting = new Audio("ting.mp3");
let gameOver = new Audio("gameOver.wav");
let gameover = false;

// function to change the turn
let turn = "X";
function ChangeTurn() {
    return turn === "X" ? "0" : "X";
}

// function to check the win 

function CheckWin() {
    let Boxt = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach((e) => {
        if ((Boxt[e[0]].innerText === Boxt[e[1]].innerText) && (Boxt[e[2]].innerText === Boxt[e[1]].innerText) && (Boxt[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = Boxt[e[0]].innerText + " won⭐⭐";
            gameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "300px";
        }
    })
}


// main logic =======================
bg_music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let BoxText = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (BoxText.innerText === "") {
            BoxText.innerText = turn;
            turn = ChangeTurn();
            ting.play();
            CheckWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }
        }
    })
})