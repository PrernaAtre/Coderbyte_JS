function ExOh(str)
{
    let count_x = 0;
    let count_o = 0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i].toLowerCase() == 'x')
        {
            count_x++;
        }
        else
        {
            count_o++;
        }
       
    }
    return count_x == count_o? true:false;
}
console.log(ExOh("x"));