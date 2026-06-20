let original = [1, 2, 3, 4, 5];
let reversed = [];

while (original.length > 0)
{
    reversed.push(original.pop());
}

console.log(reversed);