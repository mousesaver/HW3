const state = {
    a: 'apple',
    b: 'banana',
    c: 'city',
    d: 'dom',
    e: 'end',
    f: 'forEach',
    g: 'gold'
};
const letter = document.getElementById('letter')
const word = document.getElementById('word')
// console.log(letter, word)
letter.innerHTML = Object.keys(state).map((key) => {
    return `<option value=${key}>${key}</option>`
}).join("")

word.innerHTML = Object.values(state).map((value) => {
    return `<option value=${value}>${value}</option>`
}).join("")

letter.addEventListener('change', (e) => {
    word.value = state[e.target.value]
})

word.addEventListener('change', (e) => {
    letter.value = Object.keys(state).find((key) => state[key] === e.target.value)
})