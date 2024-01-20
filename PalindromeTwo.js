function PalindromeTwo(str)
{
    let str1 = str.split(/[^\w]/).join('').toLowerCase();

    return str1 == str1.split('').reverse().join('');
}
console.log(PalindromeTwo("hello"));