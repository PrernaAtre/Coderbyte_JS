function LetterCountI(str)
{
    let word = str.split(' ');
    let count = 1;
    let maxCount =0;
    let newArr = [];
    for(let i=0;i<word.length;i++)
    {
        let word_split = word[i].split('');
        for(let j=0;j<word_split.length;j++)
        {
            if(word_split[j] == word_split[j+1])
            {
                count++;
            }
            else
            {
                if(count > maxCount)
                {
                    maxCount = count;
                    count = 1;
                }
            }
            newArr.push([a])
        }
        console.log(word_split);
    }
   // console.log(arr);
}
LetterCountI("Hello apple pie");