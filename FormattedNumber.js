function FormattedNumber(strArr) 
{
     return /^(\d{1,3}(,\d{3})*(\.\d{1,50})?)$/.test(strArr[0]);
}
console.log(FormattedNumber(["2,567.00.2"]));