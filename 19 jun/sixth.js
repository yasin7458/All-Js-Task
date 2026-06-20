let arr = []

for(let i = 0;i <= 20; i++)
{
    arr.push(i);
}

let odd = arr.filter(function (num) {
    {
        return num % 2 !== 0;
    
    }
    
});

console.log(odd)