//NGな例
setTimeout(() => {console.log("hello!")}, 3000)
setTimeout(() => {console.log("bye!")}, 2000)

//非同期
setTimeout(
    () => {
        console.log("hello!")
        setTimeout(
            () => { console.log("bye!")},
            2000
        )
    },
    3000
)