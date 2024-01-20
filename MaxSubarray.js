function MaxSubarray(arr)
{
    let temp =0;
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        temp = arr[i];
        for(let j=i+1;j<arr.length;j++)
        {
            temp += arr[j];
           
            if(temp > sum)
            {
                sum = temp;
            }
            if(temp < 0)
            {
                break;
            }
        }
       
    }
    return sum;
}
console.log(MaxSubarray([3, -1, -1, 4, 3, -1]));