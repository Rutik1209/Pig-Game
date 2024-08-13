let score1 = 0;
let total1 = 0;
let score2 = 0;
let total2 = 0;

function player1() {
    score1 = Math.floor(Math.random() * 6) + 1;
    total1 += score1;
    document.getElementById("score1").innerText = score1;
    document.getElementById("total1").innerText = total1;
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = false;
    checkWinner();
}

function player2() {
    score2 = Math.floor(Math.random() * 6) + 1;
    total2 += score2;
    document.getElementById("score2").innerText = score2;
    document.getElementById("total2").innerText = total2;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn1").disabled = false;
    checkWinner();
}

function checkWinner() {
    if (total1 >= 30) {
        document.getElementById("total1").innerText = "WINNER";
        document.getElementById("total2").innerText = "LOSER";
        document.getElementById("total1").style.color = "green";
        document.getElementById("total2").style.color = "red";
        disableButtons();
    } else if (total2 >= 30) {
        document.getElementById("total2").innerText = "WINNER";
        document.getElementById("total1").innerText = "LOSER";
        document.getElementById("total2").style.color = "green";
        document.getElementById("total1").style.color = "red";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
}