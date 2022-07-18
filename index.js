const UpKey = 38,
    RightKey = 39,
    DownKey = 40,
    LeftKey = 37;

window.onload = () => {
    var car = document.getElementById("race-car"),
        gameConsoleRect = document.getElementById("game-console").getClientRects()[0],
        leftPos = 0,
        topPos = 0;
    var pressedKeys = [], carMoveTO;

    const LeftBound = 0,
        RightBound = gameConsoleRect.width - car.offsetWidth,
        TopBound = 0,
        BottomBound = gameConsoleRect.height - car.offsetHeight;

    car.style.top = topPos + "px";
    car.style.left = leftPos + "px";

    carMove = () => {
        if(pressedKeys.includes(UpKey)){
            topPos = Math.max(TopBound, topPos - 5);
            car.style.top = topPos + "px";
        }
        if(pressedKeys.includes(DownKey)){
            topPos = Math.min(BottomBound, topPos + 5);
            car.style.top = topPos + "px";
        }
        if(pressedKeys.includes(RightKey)){
            leftPos = Math.min(RightBound, leftPos + 5);
            car.style.left = leftPos + "px";
        }
        if(pressedKeys.includes(LeftKey)){
            leftPos = Math.max(LeftBound, leftPos - 5);
            car.style.left = leftPos + "px";
        }
        carMoveTO = setTimeout(carMove, 15);
    }
    document.body.addEventListener("keyup", function (ev) {
        let index = pressedKeys.indexOf(ev.keyCode);
        pressedKeys.splice(index, 1);//If the pressed key is released then we need to remove that from this array.
        if(pressedKeys.length == 0){//If no key is pressed at the end then we need to stop the infinite running function.
            clearTimeout(carMoveTO);
            carMoveTO = undefined;
        }
    });
    document.body.addEventListener("keydown", function (ev) {
        if (!pressedKeys.includes(ev.keyCode))
            pressedKeys.push(ev.keyCode);
        if(carMoveTO == undefined)
            carMove();
    });
}

