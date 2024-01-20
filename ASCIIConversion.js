function ASCIIConversion(str)
{
    let ascii_str = "";
    for(let i=0;i<str.length;i++)
    {
        if(str[i] == ' ')
        {
            ascii_str += str[i];
        }
        else
        {
            ascii_str += str.charCodeAt(i);
        }
        
    }
    console.log(ascii_str);
}
ASCIIConversion("dog dog");