console.log(one(5));
function one(num){
    return num+1;
}
// console.log(two(5));
two = function(num){
    return num+10;
}

if(true){
    let two = function(num){
        return num+2;
    }
}
console.log(two(5));