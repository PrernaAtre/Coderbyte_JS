function PrimeMover(num) 
{
    let c = 0;
    if(num == 0)
    {
        return false;    
    }
    if(num == 1)
    {
        return 2;
    }
    for(let i = 1;i<=10000;i++)
    {
        
        if(isPrime(i))
        {
            c++;
            if(c == num)
            {
                console.log(i);
                return i;
                break;
            }
        }
    }
}
function isPrime(num)
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
console.log(PrimeMover(0)); 