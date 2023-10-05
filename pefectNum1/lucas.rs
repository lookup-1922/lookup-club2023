// 必要なライブラリのインポート
extern crate num_bigint;
extern crate num_traits;

use num_bigint::BigUint;
use num_traits::{One, ToPrimitive, Zero};

// Lucas-Lehmer素数判定法を実装する関数
pub fn lucas_test(n: u64) -> bool {
    // Mnの計算
    let mersenne_exp = BigUint::one() << n;
    let mersenne = mersenne_exp - BigUint::one();

    // ルーカス列の初期化
    let mut s = BigUint::from(4u32);

    // ルーカス列を計算
    for _ in 0..(n - 2) {
        s = (s * &s - BigUint::from(2u32)) % &mersenne;
    }

    // 判定
    s.is_zero()
}

fn main() {
    let n = 113246459; // 素数判定を行うnの値

    // Lucas-Lehmer素数判定法を呼び出して結果を表示
    if lucas_test(n) {
        println!("2^{} - 1 is prime.", n);
    } else {
        println!("2^{} - 1 is not prime.", n);
    }
}
