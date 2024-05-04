document.getElementById("open-button").addEventListener("click", function() {
    const leftDoor = document.getElementById("left-door");
    const rightDoor = document.getElementById("right-door");
    
    // 左ドアと右ドアのトランジションを設定して、ドアの開閉速度を遅くします。
    leftDoor.style.transition = "transform 2s";
    rightDoor.style.transition = "transform 2s";
    
    // 左ドアの現在のtransformスタイルを取得
    const leftDoorTransform = leftDoor.style.transform;
    
    // ドアが閉じている場合は開け、開いている場合は閉じる
    if (leftDoorTransform === "rotateY(90deg)" && rightDoor.style.transform === "rotateY(-90deg)") {
        leftDoor.style.transform = "rotateY(0deg)";
        rightDoor.style.transform = "rotateY(0deg)";
    } else {
        leftDoor.style.transform = "rotateY(140deg)";
        rightDoor.style.transform = "rotateY(-140deg)";
    }
});
