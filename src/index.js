module.exports = function reverse (n) {
    
let a = n.toString();
    let result;
    result =  a.split("").reverse().join("");

        
    return parseInt(result);
}
