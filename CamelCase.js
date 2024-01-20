function CamelCase(str)
{
    console.log(str);
    str = str.toLowerCase().split(/[^\w]/);
    //console.log(str[1][0]);
    for(let i=1;i<str.length;i++)
    {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
   return str.join('');
}
console.log(CamelCase("BOB loves-coding"));