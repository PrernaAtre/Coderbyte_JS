function BinaryReversal(str)
{
    let binary_value = Number(str).toString(2);
    
    let padded_number = binary_value.length % 8 == 0? 0: 8 - binary_value.length;

    //padded_number = padded_number.toString().concat(binary_value);
    binary_value = binary_value.split('');
    //console.log(binary_value);
    while(padded_number > 0)
    {
        binary_value.splice(0,0,'0');
        padded_number--;
    }
    binary_value = binary_value.reverse().join('');
    return parseInt(binary_value,2);
}
console.log(BinaryReversal("213"));