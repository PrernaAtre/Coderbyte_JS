function BinaryConverter( str )
{
    let sum = 0;
    for(let i=str.length - 1; i>=0; i--)
    {
        if(str[i] == '1')
        {
            sum += Math.pow(2, (str.length - 1) - i);
        }
    }
    return sum;
}

console.log( BinaryConverter("100101") );
console.log( BinaryConverter("001") );