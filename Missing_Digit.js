function Missing_Digit(str)
{
    str = str.split(' ');
   // console.log(str);
   let first_operand = str[0];
   let operator = str[1];
   let second_operand = str[2];
   let resultant = str[str.length - 1];
   let res = 0,x;
   let result = "";

   if(resultant.indexOf('x') != -1)
   { 
        x = resultant;
        first_operand = parseInt(first_operand);
        second_operand = parseInt(second_operator);

        if(operator == '+')
        {
            res = first_operand + second_operand;
        }
        else if(operator == '-')
        {
            res = first_operand - second_operand;
        }
        else if(operator == '*')
        {
            res = first_operand * second_operand;
        }
        else
        {
            res = first_operand / second_operand;
        }
   }
   else
   {
        if(first_operand.indexOf('x') != -1)
        {
            x = first_operand;
            second_operand = parseInt(second_operand);
            resultant = parseInt(resultant);
            if(operator == '+')
            {
                res = resultant - second_operand;
            }
            else if(operator == '-')
            {
                res = resultant + second_operand;
            }
            else if(operator == '*')
            {
                res = Math.floor(resultant / second_operand);
            }
            else
            {
                res = Math.floor(resultant * second_operand);
            }
            
        }
        else
        {
            x = second_operand;
            first_operand = parseInt(first_operand);
            resultant = parseInt(resultant);
            if(operator == '+')
            {
                res = resultant + first_operand;
            }
            else if(operator == '-')
            {
                res = first_operand - resultant;
            }
            else if(operator == '*')
            {
                res = Math.floor(resultant / first_operand);
            }
            else
            {
                res = Math.floor(resultant * first_operand);
            }
        }
   }
   let k = 0;
   res = res.toString();
   for(let i of x)
   {
        if(i == 'x')
        {
            result = res[k];
        }
        else
        { 
            k++;
        }
   }
   return result;
}
console.log(Missing_Digit("3x + 12 = 46"));