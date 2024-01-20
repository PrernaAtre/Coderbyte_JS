function DashInsert( str ) {
    let new_str = "";
    for(let i=0;i<str.length;i++)
    {
       
            if(i != str.length-1 && Number (str[i]) % 2 !=0 && Number(str[i+1]) % 2 != 0)
            {
                new_str += str[i] + '-';
            }
            else
            {
                new_str += str[i];
            }
        
    }
    console.log(new_str);
}
DashInsert("454793");