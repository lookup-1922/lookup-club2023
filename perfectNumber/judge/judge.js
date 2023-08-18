function main() {
    let number = window.prompt("完全数か調べる数字を入力してください。"); //入力ダイアログを表示

    findDivisor(number);
    let sumDivisor = divisor.reduce((sum, current) => sum + current, 0); // 約数の合計を求める
    sumDivisor -= number;

    if (number == sumDivisor) {
        window.alert(number + "は完全数です。約数は" + divisor + "です。");

    } else if (number = !sumDivisor) {
        window.alert(number + "は完全数ではありません。約数は" + divisor + "です。");
    }
}

function findDivisor(number) { //約数を求める関数

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