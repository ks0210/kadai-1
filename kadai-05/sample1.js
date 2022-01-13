const obj1 = {}
const obj2 = {
    a: 100,
    b: "こんにちは",
    c: true,
    d: "こんにちは",
    e: "こんにちは",
    f: "こんにちは",
    g: "こんにちは",
}
const obj3  = {
    x: { y: { z: "入れ子のオブジェクトの例"} }
}

const familyname = "yamada"
const firstname = "hanako"

const obj4 = {
    // my-key: "ああああ",　ハイフンを含むキーはクオートが必要
    'my-key': "ああああ",
    // 123hello: true,
    "123hello": true,
    "m&m": "チョコレート",
    [firstname + familyname]: "aaa",
    hello: () => {console.log("こんにちは")}
}
obj4.hello()