function BasicRomanNumerals(str)
{
    let ans =0,num=0;
    const roman = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    for(let i = str.length-1;i>=0;i--)
    {
        num = roman[str.charAt(i)];
        if(num * 4 < ans)
        {
            ans = ans - num;
        }
        else
        {
            ans = ans + num;
        }
    }
    return ans;
}
console.log(BasicRomanNumerals("XIX"));