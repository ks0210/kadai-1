//ドット記法とブラケット記法

const obj = { a: 123, b: { c: true } }

console.log(obj)

console.log(obj.a)
console.log(obj["a"])

console.log(obj.b)
console.log(obj["b"])

console.log(obj.b.c)
console.log(obj.b["c"])
console.log(obj["b"].c)
console.log(obj["b"]["c"])

// console.log(obj[b][c]) // NGなケース

const score = {
    math: 80,
    literature: 90,
    science: 75,
    art: 89,
}
let subject = "art"
console.log(score[subuject])
subject = "science"
console.log(score[subject])