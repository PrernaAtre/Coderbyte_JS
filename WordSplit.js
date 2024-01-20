function WordSplit(arr)
{
    let word = arr[0];
    let dict = arr[1].split(',');
    let ans = [];
    for(let i=0;i<dict.length;i++)
    {
        if(word.includes(dict[i]))
        {
            ans.push(dict[i]);
        }
    }
    
    return ans.reverse().join(",");
}
console.log(WordSplit(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]));