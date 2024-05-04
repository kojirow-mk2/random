// ドアを開くボタンを取得
const openButton = document.getElementById("open-button");

// ドアを開いた際にランダムな文章を表示するための要素
const triviaDisplay = document.createElement('div');
triviaDisplay.id = "trivia-display";

// triviaDisplayのスタイル設定
triviaDisplay.style.position = "absolute";
triviaDisplay.style.width = "60%";
triviaDisplay.style.top = "50%";
triviaDisplay.style.left = "50%";
triviaDisplay.style.transform = "translate(-50%, -50%)";
triviaDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
triviaDisplay.style.padding = "10px";
triviaDisplay.style.borderRadius = "5px";
triviaDisplay.style.display = "none"; // 初期状態では非表示
triviaDisplay.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.6)"; // 文字の影の効果


// triviaDisplay要素を#doors要素に追加
document.getElementById("doors").appendChild(triviaDisplay);

// ドアを開くボタンのクリックイベントリスナー
openButton.addEventListener("click", function() {
        // ボタンにクリック時のアニメーションを追加
        openButton.classList.add('clicked');
        // アニメーションが終了した後にクラスを削除
        setTimeout(() => {
            openButton.classList.remove('clicked');
        }, 300); // アニメーションの時間（0.3秒）に合わせて削除

    const leftDoor = document.getElementById("left-door");
    const rightDoor = document.getElementById("right-door");
    
    // ドアのトランジション設定
    leftDoor.style.transition = "transform 2s";
    rightDoor.style.transition = "transform 2s";
    
    // ドアの開閉状態を判定
    const leftDoorTransform = leftDoor.style.transform;
    
    if (leftDoorTransform === "rotateY(140deg)" && rightDoor.style.transform === "rotateY(-140deg)") {
        // ドアが開いている場合、ドアを閉じる
        leftDoor.style.transform = "rotateY(0deg)";
        rightDoor.style.transform = "rotateY(0deg)";
        openButton.textContent = "ドアを開く";
        triviaDisplay.style.display = "none"; // テキストを非表示にする
        triviaDisplay.textContent = ""; // テキストをクリア
    } else {
        // ドアが閉じている場合、ドアを開く
        leftDoor.style.transform = "rotateY(140deg)";
        rightDoor.style.transform = "rotateY(-140deg)";
        openButton.textContent = "ドアを閉じる";
        
        // ドアが開いた後にテキストデータを表示
        setTimeout(function() {
            fetch('../data/zatugaku.txt')
                .then(response => response.text())
                .then(data => {
                    const lines = data.split('\n');
                    const randomIndex = Math.floor(Math.random() * lines.length);
                    const randomTrivia = lines[randomIndex];
                    triviaDisplay.textContent = randomTrivia;
                    
                    // ランダムな文章を表示してtriviaDisplayを表示
                    triviaDisplay.style.display = "block";
                })
                .catch(error => {
                    console.error('テキストデータの読み込みに失敗しました:', error);
                    triviaDisplay.textContent = "エラー: テキストデータの読み込みに失敗しました。";
                });
        }, 2000); // ドアが開ききった後に2秒の遅延を設定
    }
});