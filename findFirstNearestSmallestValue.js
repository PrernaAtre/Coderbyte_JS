let min_arr =[];
function findFirstNearestSmallestValue(arr)
{
    min_arr[0] = -1;
    
    for(let i=1;i<arr.length;i++)
    {
        find_min(arr,i);
    }
    return min_arr;
}
function find_min(arr,i)
{
    
    let count = 0;
    for(let j = i-1;j>=0;j--)
    {
        //flag = false;
       if(arr[i] > arr[j])   
       {
            min_arr.push(arr[j]);
            count++;
            break;
       }
      
    }
    if(count == 0)
    {
         min_arr.push(-1); 
    }
   
  
}
console.log(findFirstNearestSmallestValue([5, 3, 1, 9, 7, 3, 4, 1]));