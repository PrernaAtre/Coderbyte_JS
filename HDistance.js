function HDistance(str)
{
    let h_diff = 0;
    let str1 = str[0];
    let str2 = str[1];
    console.log(str1,str2);
    for(let i=0,j=0;i<str1.length;i++,j++)
    {
        if(str1[i] != str2[j])
        {
            h_diff++;
        }
    }
    return h_diff;
}
console.log(HDistance(["abcdef", "defabc"]));