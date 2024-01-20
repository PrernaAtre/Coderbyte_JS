function calculate_sum(numbers)
{
    let sum = 0;
    for(let i=0;i<numbers.length;i++)
    {
        sum += Math.pow(numbers[i], 2);
    }
    return sum;
}

function Happy_Number(num)
{
    let numbers = String(num);
    let i = 0;
    let sum = calculate_sum(numbers);
    if(sum == '1')
    {
        return "Happy";
    }
    else
    {
        return "Not";
    }
}
console.log(Happy_Number("10"));
//console.log(Calculate_Sum_Of_Square_Of_Digits(101));