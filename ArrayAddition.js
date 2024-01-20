function ArrayAddition(arr) 
{
    arr = arr.sort((a,b) => a-b);
    let highest = arr[arr.length - 1];
    if(highest == arr.reduce((a,b) => a+b, 0))
    {
        return true;
    }
    return ArrayAddition(arr.slice(0,arr.length - 1));
    console.log(highest);
}
console.log(ArrayAddition([4, 6, 12, 10, 1, 3]));