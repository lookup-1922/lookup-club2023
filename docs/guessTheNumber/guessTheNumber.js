//ゲーム中に変化しないグローバル変数を宣言

let gameStatus = false;//ゲームが実行中かを判定する用の変数
let number;//ランダムに生成された数字を代入する変数
let numberDivisor = [];//ランダムに生成された数字の約数を代入する配列
let startTime;//開始時刻を代入する変数
let endTime;//終了時刻を代入する変数

//ゲーム中に変化するグローバル変数を宣言

let playerNumber = null;// playerが予想した数を代入する変数
let historyPlayerNumber = [];// 変数playerNumberを代入する配列
let playerDivisor = null;// playerが予想した約数を代入する変数
let truePlayerDivisor = [];// 変数playerDivisorの内、変数numberDivisorに含まれる数を代入する配列
let falsePlayerDivisor = [];// 変数playerDivisorの内、変数numberDivisorに含まれない数を代入する配列
let currentRequest;//ゲームが現在要求する数字の種類

function gameStart() {
    gameStatus = true;
    startTime = performance.now();

    number = Math.floor(Math.random() * 100);
    let primeNumber = [23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    if (primeNumber.includes(number) == true) {
        number = Math.floor(Math.random() * 100);
    }
    console.log(number);
    numberDivisor = findDivisor(number);

    currentRequest = "divisor";
    document.getElementById("currentRequest").innerHTML = "約数の予想を入力：";
    document.getElementById("information").innerHTML = "あなたの回答を待っています。";

    let cheatTool = document.getElementById("cheatTool").checked;
    if (cheatTool === true) {
        document.getElementById("cheatToolHint").innerHTML = "ヒント:約数の個数は " + numberDivisor.length;
    }
}

function gameSunset() {
    gameStatus = false;
    endTime = performance.now();

    let time = endTime - startTime;
    time = convertMillisecondsToTime(time);

    document.getElementById("information").innerHTML = "<p>正解は" + number + "です。クリア時間は" + time + "です。</p><p>約数は" + numberDivisor + "です。</p>";
    document.getElementById("truePlayerDivisor").innerHTML = "約数である:";
    document.getElementById("falsePlayerDivisor").innerHTML = "約数ではない:";
    document.getElementById("historyPlayerNumber").innerHTML = "これまでの回答:";
    document.getElementById("cheatToolHint").innerHTML = "ヒント：";

    playerNumber = null;
    historyPlayerNumber = [];
    playerDivisor = null;
    truePlayerDivisor = [];
    falsePlayerDivisor = [];
}

function sendNumber() {
    let inputNumber = parseInt(document.getElementById("inputNumber").value);
    document.getElementById("inputNumber").value = "";

    if (gameStatus === true && !isNaN(inputNumber) && currentRequest === "divisor") {
        playerDivisor = inputNumber;

        if (numberDivisor.includes(playerDivisor) === true) {
            document.getElementById("information").innerHTML = playerDivisor + "は約数です。";

            truePlayerDivisor.push(playerDivisor);
            truePlayerDivisor = ascendingOrder(truePlayerDivisor);
            document.getElementById("truePlayerDivisor").innerHTML = `約数である: ${truePlayerDivisor.join(', ')}`;

        } else if (numberDivisor.includes(playerDivisor) === false) {
            document.getElementById("information").innerHTML = playerDivisor + "は約数ではありません。";

            falsePlayerDivisor.push(playerDivisor);
            falsePlayerDivisor = ascendingOrder(falsePlayerDivisor);
            document.getElementById("falsePlayerDivisor").innerHTML = `約数ではない: ${falsePlayerDivisor.join(', ')}`;
        }

        currentRequest = "number";
        document.getElementById("currentRequest").innerHTML = "数字の予想を入力：";

    } else if (gameStatus === true && !isNaN(inputNumber) && currentRequest === "number") {
        playerNumber = inputNumber;
        historyPlayerNumber.push(playerNumber);
        historyPlayerNumber = ascendingOrder(historyPlayerNumber);
        document.getElementById("historyPlayerNumber").innerHTML = `これまでの回答: ${historyPlayerNumber.join(', ')}`;

        if (number !== playerNumber) {
            document.getElementById("information").innerHTML = playerNumber + "ではないです。";
        } else if (number === playerNumber) {
            gameSunset();
        }

        currentRequest = "divisor";
        document.getElementById("currentRequest").innerHTML = "約数の予想を入力：";

    } else if (gameStatus === false) {
        alert("ゲームが実行されていません。");

    } else if (isNaN(inputNumber)) {
        alert("有効な数字を入力してください。");

    }

}

function findDivisor(number) { // 約数を求める関数
    let divisor = [];

    if (number <= 0) {
        return divisor; // 0以下の数には約数は存在しない
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