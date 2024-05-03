// 外部ファイルから雑学情報を読み込む
function fetchZatugaku() {
    fetch('../data/zatugaku.txt')
        .then(response => response.text())
        .then(data => {
            // 雑学の配列を取得
            const zatugaku = data.split('\n').filter(line => line.trim() !== '');
            // ランダムな項目を選択して表示
            showRandomItem(zatugaku);
        })
        .catch(error => {
            console.error('Error fetching zatugaku:', error);
        });
}

// ランダムな項目を選択して表示する関数
function showRandomItem(zatugaku) {
    // 配列からランダムな要素を選択
    const randomIndex = Math.floor(Math.random() * zatugaku.length);
    const randomItem = zatugaku[randomIndex];

    // ランダムに選択された項目を表示
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = `<p>${randomItem}</p>`;
}

// フォームが送信されたときに関数を呼び出す
function onSubmitForm(event) {
    event.preventDefault(); // フォームのデフォルト送信を停止
    fetchZatugaku(); // 雑学情報を読み込む
}
