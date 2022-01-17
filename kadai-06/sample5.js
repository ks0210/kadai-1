// エラーを throw する方法
const input = process.argv[2]

const number = parseInt(input)
if(Number.isNaN(number)) {
    throw new Error("数字以外が入力されました!")
}
console.log(number + 1)