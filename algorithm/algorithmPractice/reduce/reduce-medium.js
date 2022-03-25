const abs = [4,7,12]
let signs = [false, true, true]
abs
signs = signs.map(e => e===true?1:-1)

answer = abs.reduce((a,b,i)=> a + b*signs[i], 0)
