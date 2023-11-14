
function f(a, L = []) {
    L.push(a)
    return L
}
s
console.log(f(1))
console.log(f(2))
console.log(f(3))