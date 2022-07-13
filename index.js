const UpKey = 38,
    RightKey = 39,
    DownKey = 40,
    LeftKey = 37;

window.onload = () => {
    var car = document.getElementById("race-car"),
        gameConsoleRect = document.getElementById("game-console").getClientRects()[0],
        leftPos = 0,
        topPos = 0;

    const LeftBound = 0,
        RightBound = gameConsoleRect.width - car.offsetWidth,
        TopBound = 0,
        BottomBound = gameConsoleRect.height - car.offsetHeight;

    car.style.top = topPos + "px";
    car.style.left = leftPos + "px";

    document.body.addEventListener("keydown", function (ev) {
        switch (ev.keyCode) {
            case UpKey:
                topPos = Math.max(TopBound, topPos - 5);
                car.style.top = topPos + "px";
                break;
            case DownKey:
                topPos = Math.min(BottomBound, topPos + 5);
                car.style.top = topPos + "px";
                break;
            case RightKey:
                leftPos = Math.min(RightBound, leftPos + 5);
                car.style.left = leftPos + "px";
                break;
            case LeftKey:
                leftPos = Math.max(LeftBound, leftPos - 5);
                car.style.left = leftPos + "px";
                break;
        }
    })
}

