function main() { //ゲーム本体を動かす関数
    // 0から99までのランダムな整数を生成
    let randomNumber = Math.floor(Math.random() * 100);

    // randomNumberが1桁の場合、前に0を追加して2桁にして変数numberに代入する
    let number = randomNumber.toString().padStart(2, '0');

    // 変数numberの約数を変数numberDivisorに代入する
    let numberDivisor = findDivisor(number);

    // playerが予想した変数numberを代入する変数
    let playerNumber;

    // 変数playerNumberを代入する配列
    let historyPlayerNumber = [];

    // playerが予想した約数を代入する変数
    let playerDivisor;

    // 変数playerDivisorの内、変数numberDivisorに含まれる数を代入する配列
    let truePlayerDivisor = [];

    // 変数playerDivisorの内、変数numberDivisorに含まれない数を代入する配列
    let falsePlayerDivisor = [];

    //数字を予想する動作の繰り返し
    while (number != playerNumber) {
        playerDivisor = window.prompt("0~99で約数の予想を入力してください。");

        if (numberDivisor.includes(playerDivisor) == true) {
            truePlayerDivisor.push(playerDivisor);
            truePlayerDivisor = ascendingOrder(truePlayerDivisor);
        } else if (numberDivisor.includes(playerDivisor) == false) {
            falsePlayerDivisor.push(playerDivisor);
            falsePlayerDivisor = ascendingOrder(falsePlayerDivisor);
        }

        playerNumber = window.prompt("00~99で数字の予想を入力してください。");
        historyPlayerNumber.push(playerNumber);
        historyPlayerNumber = ascendingOrder(historyPlayerNumber);
    }

    window.alert("おめでとうございます！正解は" + number + "です。\n約数は" + numberDivisor + "です。\nクリア時間は");
}

function reload() { //ページをリロードする関数
    location.reload();
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
    arr.sort(function(first, second){
        if (first > second){
          return 1;
        }else if (first < second){
          return -1;
        }else{
          return 0;
        }
      });
}