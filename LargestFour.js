function LargestFour(arr)
{
    arr.sort((a,b) => a-b);
    console.log(arr);
    let sum=0;
    let l = arr.length - 1;
    for(let i=4; i>0;i--)
    {
        sum += arr[l];
        l--;
    }
    console.log(sum);
}
LargestFour([0,0,2,3,7,1]);