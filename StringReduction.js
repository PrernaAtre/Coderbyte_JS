function StringReduction(str)
{
    let ReduceString = new String("");
    let StringReplacement = {
        "ab" : "c",
        "ac" : "b",
        "ba" : "c",
        "bc" : "a",
        "ca" : "b",
        "cb" : "a",
    }
    for(let i=0;i<str.length;i++)
    {
        if(str[i] + str[i+1] in StringReplacement)
        {
            flag = true;
            ReduceString += StringReplacement[str[i] + str[i+1]];
            i++;
        }
    }
}
StringReduction()