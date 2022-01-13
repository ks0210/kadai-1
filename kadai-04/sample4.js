function func1() {
    console.log('hello')
}
const result1 = func1()
console.log(result1)

function func2() {
    console.log(1)
    return
    console.log(2)
}
func2()