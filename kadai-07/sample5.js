// プライベートプロパティ
 
class Person {
    constructor(name) {
        this.name = name
    }
    get name() {
        return this._name
    }
    set name(name) {
        throw new Error("名前を後から変更できません")
    }
    rename(newName) {
        役所の手続き()
        this._name = newName
    }
}

const person = new Person("田中")
console.log(person.name)
person.rename("吉田")
// person._name = "吉田"
// console.log(person.name)