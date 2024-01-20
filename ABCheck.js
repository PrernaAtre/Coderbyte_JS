function ABCheck(str)
{
    return str.search(/a...b/) > -1;
}
console.log(ABCheck("afteb badly"));