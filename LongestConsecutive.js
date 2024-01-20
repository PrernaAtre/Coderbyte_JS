function LongestConsecutive(arr)
{
    arr.sort((a,b) => a-b);
    console.log(arr);
    let count = 1;
    let max = 0;
    let prev_count = 0;
    for(let i=1;i<arr.length;i++)
    {
       if(arr[i] == arr[i-1] + 1 )
       {
            count ++;
           
       }
       else
       {
            count = 1;
       }
       max = (max > count) ? max : count;
    }
    return max;

}
console.log(LongestConsecutive( [5, 6, 1, 2, 8, 9, 7] ));