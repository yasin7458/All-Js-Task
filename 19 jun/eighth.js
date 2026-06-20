let numbers = [10,25,30,40,50,60,70,80]

let multiply = numbers.map(function(num){
    return num * 5;
});

let result = multiply.filter(function(num){
    return num > 100;
});

result.forEach(function(num)
{
    console.log(num);
});