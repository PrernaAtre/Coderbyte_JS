function Division(num1,num2) 
{
    let min = Math.min(num1,num2);
    for(let i=min;i>0;i--)
    {
        if(num1 % i == 0 && num2 % i ==0)
        {
            return i;
        }
    }
}
console.log(Division(16,12));