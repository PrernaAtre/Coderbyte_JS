function FormattedDivision(num1,num2)
{
    let ans = (num1/num2).toFixed(4).split(".");
    return new Intl.NumberFormat().format(ans[0])+"."+ans[1];
}
console.log(FormattedDivision(123456789,10000));