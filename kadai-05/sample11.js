// オブジェクトの参照の実験
const a1 = { x:1, y:2 }
console.log(a1)
const b1 = a1
console.log(b1)
b1.x = 10
console.log(b1)
console.log(a1) // どんな値が出力されるか？
// { x10, y:2 } が出力される

// ---
const a2 = { x:1, y:2 }
console.log(a2)
const b2 = { x:1, y:2 }
console.log(b2)
b2.x = 10
console.log(b2)
console.log(a2) // どんな値が出力されるか？
// { x:1, y:2 }　が出力される

// ---

const a3 = {
    x:1,
    y: {
        z:3,
        w:4
    }
}
const b3 = a3.y
b3.z = 100
console.log(a3)