function Consecutive(arr)
{
    let number_of_consecutive = 0;
    arr = arr.sort((a,b) => a-b);
    for(let i=arr[0]; i <= arr[arr.length-1]; i++ )
    {
        number_of_consecutive++;
    }
    number_of_consecutive = number_of_consecutive - arr.length;
    return number_of_consecutive;

}
console.log(Consecutive([5,10,15]));