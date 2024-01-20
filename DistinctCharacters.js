function DistinctCharacters( str )
{
    new_set = new Set(str);
    return [...new_set].join('').length > 9? true:false;
}
console.log(DistinctCharacters("12334bbmma:=6"));