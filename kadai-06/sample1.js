const dog = {
    name: "kuu",
    age: 11
}

console.log(dog)
const jsonstring = JSON.stringify(dog)
console.log(jsonstring)

const dog_parsed = JSON.parse(jsonstring)
console.log(dog_parsed)

const a = { "a":10, "b":10.} // エラーではない
JSON.parse('{ "a":10, "b":10, } ') //エラー！