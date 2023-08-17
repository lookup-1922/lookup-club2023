number = int(input("完全数か調べる数字を入力してください。"))

# 約数を求める
divisor = []
if number <= 0:
    # 0以下の数には約数が存在しない
    print("正の整数を入力してください。")
else:
    for i in range(1, number+1):
        if number % i == 0:
            divisor.append(i) # 約数の場合、divisor配列に追加

# 約数の和を求める・約数の和から自身を引く
sumDivisor = 0 # 合計を格納する変数
for i in range(len(divisor)):
    sumDivisor += divisor[i] # 配列の各要素を足し合わせる

sumDivisor -= number  

# 結果を表示する
if number == sumDivisor:
    result = input(str(number) + "は完全数です。約数も表示しますか？y/n?")
    if result == "y" or result == "":
        divisor_str = ", ".join(map(str, divisor))
        print(str(number) + "は完全数です。約数は" + divisor_str + "です。")
else:
    result = input(str(number) + "は完全数ではありません。約数も表示しますか？y/n?")
    if result == "y" or result == "":
        divisor_str = ", ".join(map(str, divisor))
        print(str(number) + "は完全数ではありません。約数は" + divisor_str + "です。")