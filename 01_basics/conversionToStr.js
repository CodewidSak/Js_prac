let someNum = 1253;
console.log("Variable = "+someNum);
console.log("Type = " + typeof someNum);//number

/*
method 1 :
let str = String(someNum); 
console.log("Variable = "+str);
console.log("Type = " + typeof str);//string
*/


// method 2:
let str = someNum.toString();
console.log("Variable = "+str);
console.log("Type = " + typeof str);//string