//　破壊的なメソッド、非破壊的なメソッド

const fruits = [
    "apple",
    "orange",
    "banana",
    "mangoo"
]

//　sliceは元の配列を変更しない　＝非破壊的なメソッド
const sliced = fruits.slice(1,3)
console.log(fruits, sliced)

// splice は元の配列を変更する　＝　破壊的なメソッド
const spliced = fruits.splice(1,2)
console.log(fruits, spliced)


// 破壊的:　splice、 push、 pop、 shift
//　非破壊的: slice、 map、 every、 some