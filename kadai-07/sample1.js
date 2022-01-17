//最もシンプルなクラス
class myClass {} // クラスの定義
const instance = new myClass() // クラスのインスタンス化
// console.log(instance)

//コンストラクタを定義したクラス
class Hello {
    constructor() {
        console.log("hello!")
    }
}
const hello = new Hello()

//　コンストラクタに引数を渡す
class Person1 {
    constructor(name,age) {
        console.log(`Hello,${name}さん!`)
        this.name = name
        this.age = age
    }
}
const person1 = new Person1("田中", 30)
console.log(person1.name, person1.age)

//　メソッドを持つクラス
class Person2 {
    constructor(name,hobby) {
        this.name = name
        this.hobby = hobby
    }
    hello() {
        console.log(`こんにちは、${this.name} です。趣味は ${this.hobby} です。`)
    }
}
const yoshida = new Person2("吉田","ランニング")
const hayashi = new Person2("林","プログラミング")
yoshida.hello()
hayashi.hello()

class Teacher extends Person2 {
    constructor(name, hobby) {
        super(name, hobby)
        this.isTeacher = true
    }
}
class Student extends Person2 {
    constructor(name, hobby) {
        super(name, hobby)
        this.isStudent = true
    }
    takeClass() {
        console.log("授業を受けました")
    }
}

const kamata = new Teacher("鎌田","登山")
kamata.hello()
console.log(kamata.isTeacher)

const student = new Student("渡辺","スポーツ")
student.takeClass()