function SimpleMode(arr) 
{
    let count = 0;
    let maxCount = 0;
    let mode;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i] == arr[j])
            {
                count++;
            }
        }
        if(count > maxCount)
        {
            maxCount = count;
       
            mode = arr[i];
        }
        count = 0;
    }
    console.log(mode);
}
SimpleMode([10, 4, 5,10, 2, 4]);