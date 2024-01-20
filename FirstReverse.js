function FirstReverse(str)
{
    str = str.split('').reverse().join('');
    return str;

}
console.log(FirstReverse("I Love Code"));