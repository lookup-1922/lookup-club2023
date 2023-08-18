function main() { //ゲーム本体を動かす関数
    // 0から99までのランダムな整数を生成
    let number = Math.floor(Math.random() * 100);

    // 変数numberの約数を変数numberDivisorに代入する
    let numberDivisor = findDivisor(number);

    // playerが予想した変数numberを代入する変数
    let playerNumber = null;

    // 変数playerNumberを代入する配列
    let historyPlayerNumber = [];

    // playerが予想した約数を代入する変数
    let playerDivisor;

    // 変数playerDivisorの内、変数numberDivisorに含まれる数を代入する配列
    let truePlayerDivisor = [];

    // 変数playerDivisorの内、変数numberDivisorに含まれない数を代入する配列
    let falsePlayerDivisor = [];

    // 開始時刻を記録
    const startTime = performance.now();

    //数字を予想する動作の繰り返し
    while (number != playerNumber) {
        playerDivisor = parseInt(window.prompt("0~99で約数の予想を入力してください."), 10); // 数値に変換

        if (numberDivisor.includes(playerDivisor) == true) {
            truePlayerDivisor.push(playerDivisor);
            truePlayerDivisor = ascendingOrder(truePlayerDivisor);

            window.alert(playerDivisor + "は約数です。\n約数である:" + truePlayerDivisor + "\n約数ではない:" + falsePlayerDivisor + "\nこれまでの回答:" + historyPlayerNumber);

        } else if (numberDivisor.includes(playerDivisor) == false) {
            falsePlayerDivisor.push(playerDivisor);
            falsePlayerDivisor = ascendingOrder(falsePlayerDivisor);

            window.alert(playerDivisor + "は約数ではないです。\n約数である:" + truePlayerDivisor + "\n約数ではない:" + falsePlayerDivisor + "\nこれまでの回答:" + historyPlayerNumber);
        }

        playerNumber = parseInt(window.prompt("0~99で数字の予想を入力してください."), 10); // 数値に変換
        historyPlayerNumber.push(playerNumber);
        historyPlayerNumber = ascendingOrder(historyPlayerNumber);
    }

    // 終了時刻を記録
    const endTime = performance.now();

    let time = endTime - startTime;
    time = convertMillisecondsToTime(time);

    window.alert("おめでとうございます！正解は" + number + "です。\n約数は" + numberDivisor + "です。\nクリア時間は" + time + "です。");
}

function findDivisor(number) { // 約数を求める関数
    let divisor = [];

    if (number <= 0) {
        return divisor; // 0以下の数には約数が存在しない
    }

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisor.push(i); // 約数の場合、divisor配列に追加
        }
    }

    return divisor;
}

function ascendingOrder(arr) {
    return arr.sort(function (first, second) {
        if (first > second) {
            return 1;
        } else if (first < second) {
            return -1;
        } else {
            return 0;
        }
    });
}

function convertMillisecondsToTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}