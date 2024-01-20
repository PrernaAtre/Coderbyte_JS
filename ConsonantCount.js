function ConsonantCount( str )
{
    str1 = str.split(' ');
    str = str1.join('');
    let pattern = /[^a|e|i|o|u]/ig;
    let result = str.match(pattern).length;
    console.log(result);
}
ConsonantCount("Hello World");