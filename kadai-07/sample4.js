// getter setter の例
class Person {
    constructor(name) {
        this._name = name
    }
    get name() {
        console.log("名前を参照しました")
        return this._name
    }
    set name(name) {
        console.log("名前を代入しました")
        this._name = name
    }
}

const person = new Person("田中")
console.log(person.name)
person.name = "吉田"