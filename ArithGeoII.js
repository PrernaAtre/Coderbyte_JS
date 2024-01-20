function ArithGeoII(arr)
{
    if(isArithmetic(arr))
    {
        return "Arithmetic Expression"
    }
    if(isGeometric(arr))
    {
        return "Geometric Expression"
    }
    return -1;
}
function isArithmetic(arr)
{
    let diff = arr[1] - arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(i != arr.length-1)
        {
            if(arr[i+1] - arr[i] != diff)
            {
                return false;
            }
        }
    }
    return true;;
}
function isGeometric(arr)
{
    let diff = arr[1] / arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(i != arr.length-1)
        {
            if(arr[i+1] / arr[i] != diff)
            {
                return false;
            }
        }
    }
    return true;;
}
console.log(ArithGeoII([2,4,16,24]));