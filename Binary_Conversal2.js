function Binary_Conversal(str)
{
    let binary_value = Number(str).toString(2);
    padded_value  = binary_value.length % 8 ==0  ? 0:8-binary_value.length;
    binary_value = binary_value.split('');
    while(padded_value > 0)
    {
        binary_value.splice(0,0,'0');
        padded_value--;
    }
    binary_value = binary_value.reverse().join('');
    return parseInt(binary_value,2);
    
}
console.log(Binary_Conversal("48"));
