// Jessica Reid
// Date: 4/3/2026
// Lab 2 - FizzBuzz

// for loop...
for (let i = 1; i <= 100; i++) // using 0 won't be necessary
{
    // check before rather than after
    if (i % 3 === 0 && i % 5 === 0) // this needs to be first, else Fizz overrides
    {
        console.log("FizzBuzz")
        continue; // required to skip the number from being printed
    } else if (i % 3 === 0)
    {
        console.log("Fizz")
        continue;
    } else if (i % 5 === 0)
    {
        console.log("Buzz")
        continue;
    } 
    console.log(i);
}