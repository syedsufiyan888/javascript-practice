// switch conditional statement
var day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

//funtion
function sum(a,b){
    return console.log(a+b);
}
sum(4,7);

//another way of declaring function - funtion expression
var difference = function(x,y){
    return console.log(x-y);
}
difference(9,2);

// Looping Statements - for, do, do while
// for loop
for(var i=0;i<=5;i++){
    console.log("Number --> ", i);
}
//while
console.log("This is log")
var a=0;
while(a<5){
    result= a+1;
    a++;
    console.log(result);
}
//do while
console.log("This is do while")
m=0;
do{
   result=m+3;
   m++;
   console.log(result);
}while(m<5);
