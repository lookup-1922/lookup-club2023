function divisor(n) {
    const ret = []; // 結果を格納する配列
  
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        ret.push(i); // 約数を追加
        if (i * i !== n) ret.push(n / i); // 平方根でない場合、対応する約数を追加
      }
    }
  
    ret.sort((a, b) => a - b); // 昇順にソート
    return ret; // 約数の配列を返す
  }