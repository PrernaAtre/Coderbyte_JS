function NumberSearch( str) 
{
    let sum =0;
    len = str.replace(/[^a-zA-Z]+/g,'').length;
    //console.log(len);
   // console.log(str.length);
    for(let i=0;i<len;i++)
    {
        if(str[i] > 0 || str[i] <= 9)
        {
            sum += Number(str[i]);
        }
    }
    return Math.round(sum / len);
}
console.log(NumberSearch("Hello6 9World 2, Nic8e D7ay!"));