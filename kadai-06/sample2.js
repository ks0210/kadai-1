const obj1 = {
    hello: "world",
    func: () => { console.log("hello") },
    undef: undefined,
    object: {
        a:1,b:2,c:true
    },
    array: [1,2,3,4,5, true, false]
}
const jsonstring1 = JSON.stringify(obj1)
console.log(jsonstring1)

const jsonstring2 = '{"a": "ああああ"}'
const obj2 = JSON.parse(jsonstring2)
console.log(obj2)