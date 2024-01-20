function HTMLElements(str)
{
    let open = str.match(/<\w+>/g);
    let close = str.match(/<\/\w+>/g);
    let strobj = {'<div>' : '</div>',
                  '<p>' : '</p>',
                  '<i>' : '</i>',
                  '<em>' : '</em>',
                  '<b>' : '</b>'
                }
    for(let i=0;i<open.length;i++)
    {
        if(close.indexOf(strobj[open[i]] == -1))
        {
            return false;
        }
    }
    return true;
 
}
console.log(HTMLElements("<div><b><p>hello world</p></b></div>"));