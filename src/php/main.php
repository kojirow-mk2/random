<!DOCTYPE html>
<html lang="UTF-8">
    <head>
        <meta charset="UTF-8">
        <title>main<title>
    </head>
    <body>

<?php
    //十種の項目に配列に定義
    $zatugaku = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ];

    // フォームの送信をチェックし、ボタンが押された場合はランダムに選択します。
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // 配列からランダムな要素を選択
    $randomIndex = array_rand($items);
    $randomItem = $items[$randomIndex];
    
    // ランダムに選択された項目を表示します。
    echo "<p>ランダムな選択: $randomItem</p>";
}
?>
<!-- ボタンを含むフォーム -->
<form method="post">
    <button type="submit">表示</button>
</form>

</body>
</html>
    