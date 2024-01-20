function RunLength(str)
{
    let ans = [];
    let count = 1;
    for(let i=0;i<str.length;i++)
    {
        if(str[i] == str[i+1])
        {
            count++;
        }
        else
        {
            ans.push(count + str[i]);
            count = 1;
        }
    }
    return ans.join('');
}
console.log(RunLength("wwwggopp"));