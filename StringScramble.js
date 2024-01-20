function StringScramble(str1,str2) 
{
    let arr = str1.split('');

    for(let i=0;i<str2.length;i++)
    {
        if(!arr.includes(str2[i]))
        {
            return false;
        }
    }
    return true;
}
console.log(StringScramble("rkqodlw", "worldx"));