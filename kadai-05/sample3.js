// undefindなプロパティにアクセスするとエラー

const obj = { a: 123, b: { c: true } }

console.log(obj.abc)
console.log(obj.abc,xyz)