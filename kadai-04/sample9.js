// 組み込み関数
// setTimeout(
//     () => { console.log("hello!") },
//     5000
// )
setInterval(
    (() => { console.log("hello!") }),
    1000
)