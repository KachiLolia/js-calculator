var num1 = prompt('First Number: ')
var num2 = prompt('Second Number: ')
var operator = prompt('Operator: ')

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if(operator == '+')
{
    alert(num1 + num2)
} else if(operator == '-')
{
    alert(num1 - num2)
} else if(operator == '*')
{
    alert(num1 * num2)
} else if(operator == '/')
{
    alert(num1 / num2)
}