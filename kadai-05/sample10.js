const dog = { 
    name: "Kuu",
    age: 11,
    sex: "male",
}
const keys = Object.values(dog)
console.log(keys)
const values = Object.values(dog)
console.log(values)

for (const key of keys) {
    const value = dog[key]
    console.log(key, value)
}