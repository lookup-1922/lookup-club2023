Lucas-Lehmer素数判定法（Lucas-Lehmer primality test）は、特定の形式の素数であるメルセンヌ素数を検証するためのアルゴリズムです。メルセンヌ素数は、2の冪乗から1を引いた形式の素数で、Mersenne数とも呼ばれます。形式的には、Mersenne数は以下のように表されます：

Mn = 2^n - 1

ここで、nは非負整数です。メルセンヌ素数は、nが素数の場合にのみ素数となります。

Lucas-Lehmer素数判定法は、与えられたnに対してMnが素数かどうかを判定するために使用されます。以下は、Lucas-Lehmer素数判定法の基本的なステップです：

Mnの計算: Mn = 2^n - 1 を計算します。この値がメルセンヌ数です。

ルーカス列の生成: ルーカス列と呼ばれる数列を生成します。最初の2つの項は次のように設定します：
S0 = 4
S1 = 4

次に、以下の漸化式を使ってルーカス列を生成します：
Si = Si-1^2 - 2

これをi = 2からn - 2まで繰り返します。

最終項の計算: Sn-2を計算します。

Mnで割る: Mnで割った余りを計算します。つまり、Sn-2 % Mn を計算します。

判定: もしSn-2 % Mnが0であれば、Mnは素数です。そうでない場合、Mnは素数ではありません。

Lucas-Lehmer素数判定法は、特に大きなメルセンヌ数の素数性を検証するために効果的な方法であり、GIMPS（Great Internet Mersenne Prime Search）などのプロジェクトで使用されています。ただし、この方法はメルセンヌ数に対してのみ有効であり、一般的な素数には適用できません。