function DifferentCases(str) 
{
    str = str.toLowerCase().split(/[^\w]/);
    let new_str = "";
    for(let i=0;i<str.length;i++)
    {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join('');
}
console.log(DifferentCases("a b c d-e-f%g"));