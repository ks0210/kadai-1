// スコープはなぜ便利なのか

let count = 0

const increment = () => {
    count = count + 1
    console.log("現在" + count + "回")
}

increment()
increment()
increment()