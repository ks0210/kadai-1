const parent = { name: "kuu" }
const child = { name: "kumi" }
parent.child = child
child.parent = parent
console.log(parent.child.parent.child.parent)
JSON.stringify(parent) // 循環参照を待つのでエラー