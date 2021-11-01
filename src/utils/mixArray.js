
export function mixArray(nambers) {
    const newArr = [...nambers]
    for (let i = 0; i < newArr.length; i++) {
        let random = Math.floor(Math.random() * newArr.length)
        let element = newArr[random]
        newArr[random] = newArr[i]
        newArr[i] = element
    }
    return newArr;
}