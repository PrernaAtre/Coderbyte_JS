function LetterCapitalize(str) 
{
    let arr = str.split(' ');
    let ans = [];
    for(let i=0;i<arr.length;i++)
    {
        ans.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
   return ans.join(' ');
}
console.log(LetterCapitalize("i ran there"));