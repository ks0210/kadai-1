// プロパティの値を書き換える

const obj = {
    name: "yamada",
    age: 20,
    gender: "male",
}

console.log(obj)
obj.age = obj.age + 1
console.log(obj)
obj.hasCat = false
obj.hasDog = true
obj.address = "奈良県"
console.log(obj)
delete obj.hasDog
console.log(obj)