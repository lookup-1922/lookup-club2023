function main() {
    // 0から99までのランダムな整数を生成
    let randomNumber = Math.floor(Math.random() * 100);

    // randomNumberが1桁の場合、前に0を追加して2桁にする
    let formattedNumber = randomNumber.toString().padStart(2, '0');

    // 変数numberに代入
    let number = formattedNumber;
}

function reload() {
    location.reload();
}