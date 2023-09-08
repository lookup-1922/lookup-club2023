fn divisor(n) {
    let mut ret = vec![]; // 結果を格納する配列

    while i * i <= n {
        if (n % i == 0){
            ret.push(i); // 約数を追加
            if (i * i != n) ret.push(n / i); // 平方根でない場合、対応する約数を追加
        }
        i += 1;
    }

    ret.sort(); //昇順にソート
    return ret;
}