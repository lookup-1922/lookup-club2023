extern crate num_bigint;
use num_bigint::BigUint;
use num_traits::One;
use std::time::Instant;
use std::fs::File;
use std::io::Write;
use indicatif::{ProgressBar, ProgressStyle};

fn lucas_lehmer_test(n: u64, progress_bar: &ProgressBar) -> bool {
    let m = BigUint::one() << n;
    let mut s = BigUint::new(vec![4]);
    let mut m_minus_one = m.clone();
    m_minus_one -= BigUint::one();

    for _ in 0..(n - 2) {
        s = (s * &s - BigUint::new(vec![2])) % &m;
        progress_bar.inc(1);
    }

    s == BigUint::zero()
}

fn main() {
    let n =  exponent; // メルセンヌ数の指数
    let start_time = Instant::now();

    // プログレスバーを初期化
    let progress_bar = ProgressBar::new(n - 2);
    progress_bar.set_style(ProgressStyle::default_bar()
        .template("[{elapsed_precise}] [{bar:40}] {pos}/{len} ({eta})")
        .progress_chars("=> "));

    let result = lucas_lehmer_test(n, &progress_bar);

    let elapsed_time = start_time.elapsed();
    println!("Elapsed time: {:?}", elapsed_time);

    let result_message = if result {
        format!("2^{} - 1 is a Mersenne prime.", n)
    } else {
        format!("2^{} - 1 is not a Mersenne prime.", n)
    };

    // 結果をファイルに保存
    let mut file = File::create("mersenne_result.txt").expect("Failed to create file");
    file.write_all(result_message.as_bytes()).expect("Failed to write to file");

    progress_bar.finish();
}
