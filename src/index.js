module.exports = function reverse (n) {
    
    let arr = [];
    if (n > 0) {
        arr = String(n).split("");
        arr = arr.reverse();
        n = +arr.join("");
    }
    if (n < 0) {
        arr = String(n).split("");
        arr.shift();
        arr.reverse();
        n = +arr.join("");
    }
    
    return n;    
}
