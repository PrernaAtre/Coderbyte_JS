function PrimeTime(num) 
{
    let flag = true;
    for(let i=2;i<=Math.sqrt(num)+1;i++)
    {
        if(num % i == 0)
        {
            flag = false;
        }
        
    }
    return flag;
}
console.log(PrimeTime(5));