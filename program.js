var winCount = 0;
var drawCount = 0;
var loseCount = 0;
var currentState = 0;
var img = document.getElementsByTagName('img')[3];
function update() {
    currentState = (currentState + Math.round(Math.random() * 3)) % 3;
    switch (currentState) {
        case 0:
            img.src = "scissors.png";
            break;
        case 1:
            img.src = "cotton.png";
            break;
        case 2:
            img.src = "stone.png";
    }
    setInterval(update, 100);
}
function overHandler(button) {
    button.style.opacity = 0.2;
}
function outHandler(button) {
    button.style.opacity = 1.0;
}
function updateCount(sign) {
    switch (sign) {
        case 0:
            winCount++;
            alert("victory!");
            break;
        case 1:
            drawCount++;
            alert("draw!");
            break;
        case 2:
            loseCount++;
            alert("lose!");
            break;
    }
}
function updateResult(playerState, currentState) {
    switch (playerState) {
        case 0:
            switch (currentState) {
                case 0: updateCount(1);
                    break;
                case 1: updateCount(0);
                    break;
                case 2: updateCount(2);
            }
            break;
        case 1:
            switch (currentState) {
                case 0: updateCount(2);
                    break;
                case 1: updateCount(1);
                    break;
                case 2: updateCount(0);
            }
            break;
        case 2:
            switch (currentState) {
                case 0: updateCount(0);
                    break;
                case 1: updateCount(2);
                    break;
                case 2: updateCount(1);
            }
    }
}
function updateScoreBoard() {
    document.getElementById("win").innerHTML = winCount;
    document.getElementById("draw").innerHTML = drawCount;
    document.getElementById("lose").innerHTML = loseCount;
}
function clickHandler(button) {
    for (var i = 0; i < 3; i++)
        document.getElementsByTagName('img')[i].style.height = "100px"
    button.style.height = "80px";
    var playerCheck = button.alt;
    var playerState = 0;
    if (playerCheck == "scissors")
        playerState = 0;
    else if (playerCheck == "cotton")
        playerState = 1;
    else
        playerState = 2;
    updateResult(playerState, currentState);
    updateScoreBoard();
}
update();