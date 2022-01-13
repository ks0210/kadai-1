// setTimeout や のキャンセル

// const timerId = setTimeout(() => {console.log("Hello!")},3000)
// clearInterval(timerId)

let count = 0
const timerId = setInterval(
    () => {
        count = count + 1
        console.log("Hello, " + count)
        if(count > 10) {
            clearInterval(timerId)
        }
    },
    500
)