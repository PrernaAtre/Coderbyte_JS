function DistinctList(arr)
{
   let duplicate_count =0;
   for(let i=0;i<arr.length;i++) 
   {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i] == arr[j])
            {
                duplicate_count++;
            }
        }
   }
   if(duplicate_count > 0)
   {
        return duplicate_count - 1;
   }
   else
   {
        return 0;
   }
   
}
console.log(DistinctList([1, 2, 2, 2, 3]))