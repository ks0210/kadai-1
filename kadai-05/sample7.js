// 既定のプロパティ・メソッド
const fruits = [
    "apple",
    "orange",
    "banana",
    "mangoo"
]

console.log(fruits.length)
fruits.push("pear") // 配列に追加する
console.log(fruits)
fruits.push("persimon")
console.log(fruits)

let last = fruits.pop()//　配列から取り出す
console.log(last,fruits)

const result = fruits.map((fruit) => {
    return `I love  ${fruit}.`
})
console.log(result)

fruits.shift()
console.log(fruits)

const answers = [true,true,true,false]
const everyResult = answers.every((answer) => {return answer === true })
console.log(everyResult)
const someResult = answers.some((answer) => { return answer === true })
console.log(someResult)