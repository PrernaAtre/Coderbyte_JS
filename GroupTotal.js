function GroupTotal(arr)
{
    let maps = new Map();
    for(let str of arr)
    {
        let [word, value] = str.split(":");
        maps.set(word,(maps.get(word) || 0) + parseInt(value));
        //console.log(word,value);
    }
    let ans = [];
    for(let [key, value] of maps)
    {
        if(value > 0 || value < 0)
        {
            ans.push(key+" : "+value);
        }
    }
    return ans.reverse().join(",");
}
console.log(GroupTotal(["a:-1", "b:2","a:3"]));