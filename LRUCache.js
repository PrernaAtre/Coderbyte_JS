function LRUCache(strArr)
{
    let cacheArr = [];
 
    const cache_window_size = 5;
    for(let i=0;i<strArr.length;i++)
    {
        if(!(cacheArr.includes(strArr[i])))
        {
            cacheArr.push(strArr[i]);
        }
        else
        {
           cacheArr.slice(0,cacheArr.indexOf(strArr[i])) + cacheArr.slice(cacheArr.indexOf(strArr[i+1])) + strArr[i];
        }
    }
    //console.log(cacheArr);
    return cacheArr.join('-');
}
console.log(LRUCache(["A","B","C","D","A","E","D","Z"]));