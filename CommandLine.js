function CommandLine(str)
{
    str = str.split('=');
    let left = [str[0]];
    let right = str[str.length - 1];
    console.log(str);
    console.log(left);
    console.log(right);
    for(let i=1;i<str.length -1 ;i++)
    {
        part = str[i].split(" ");
        console.log(part);
    }
    console.log(left);
}
CommandLine("letters=A B Z T numbers=1 2 26 20 combine=true");