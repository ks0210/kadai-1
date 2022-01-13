function func_a() {console.log("hello")}
console.log(typeof func_a)
func_a()

const func_b = func_a
console.log(typeof func_b)
func_b()

const func_c = function() {console.log('hello!')}
func_c()
const func_d = () => {console.log("hello!")}
func_d()