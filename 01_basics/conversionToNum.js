let str1 = "123";
console.log("Variable = "+str1); //123                   
console.log("Type = " + typeof str1); // string

let num1 = Number(str1);
console.log("Variable = "+num1);//123
console.log("Type = " + typeof num1); //number

let str2 = "123abc";
console.log("Variable = "+str2); //123abc
console.log("Type = " + typeof str2);// string

let num2 = Number(str2);
console.log("Variable = "+num2); //NaN
console.log("Type = " + typeof num2); // number


let str3 = true ;
console.log("Variable = "+str3);//true
console.log("Type = " + typeof str3);//boolean

let num3 = Number(str3);
console.log("Variable = "+num3); //1
console.log("Type = " + typeof num3); //number

let str4 = null ;
console.log("Variable = "+str4);// null
console.log("Type = " + typeof str4);// object

let num4 = Number(str4);
console.log("Variable = "+num4); // 0 
console.log("Type = " + typeof num4); // number


let str5 = "Sakshi";
console.log("Variable = "+str5);// Sakshi
console.log("Type = " + typeof str5);// string

let num5 = Number(str5);
console.log("Variable = "+num5); //NaN
console.log("Type = " + typeof num5); //number

let str6;
console.log("Variable = "+str6);//undefined
console.log("Type = " + typeof str6);//undefined

let num6 = Number(str6);
console.log("Variable = "+num6); //NaN
console.log("Type = " + typeof num6); //number

