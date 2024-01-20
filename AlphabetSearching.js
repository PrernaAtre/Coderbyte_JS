function AlphabetSearching(str)
{
    let new_str = str.split("");
    return [...new Set(new_str)].length == 26;
}
console.log(AlphabetSearching("zaaaaaacxyjbkfgtbh"));