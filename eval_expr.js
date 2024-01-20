function parse( str )
{
    let expr="";
    for(let i=0;i<str.length;i++)
    {
        if(str[i] == '(' &&  ((str[i-1] == ')') || !isNaN(str[i-1])  ))
        {
            expr += '*';
        }
        expr += str[i];
    }
    console.log(expr);
    return eval(expr);
}
console.log(parse("(2-0)(6/2)"));