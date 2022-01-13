// スコープの実験
const x = "bye"
{
    const x = "Hello"
    console.log(x)
}
{
    const x = "bonjour"
    console.log(x)
}
console.log(x)