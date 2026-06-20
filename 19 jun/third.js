function check()
{
    let numbers = [1,3,5,7,8,9]

    let result = numbers.some(num => num % 2 === 0)
    console.log(result,"(sice all number are even)")
}

check();