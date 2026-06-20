function check()
{
    let numbers = [2,4,6,8,10]

    let result = numbers.every(num => num % 2 == 0)
    console.log(result,"(sice all number are even)")
}

check();