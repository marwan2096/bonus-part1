
let a = (prompt ("enter first number" ))
let b = (prompt ("enter second number" ))
let z = prompt ("enter operation " )
let result;
let result2;


switch(z){


case "+":
 result= (`${+a + +b}`);
 break;

case "-":
    result= (`${+a - +b}`);
    break;
    case "/":
    result= (`${+a / +b}`);
    break;
    case "*":
    result= (`${+a  *   +b}`);
    break;
     case "%":
        result= (`${+a %+b}`);




}

let f=prompt("enter second number")
let v=prompt("enter operator ")
   
switch(v){


    case "+":
     result2= (`${+result + +f}`);
     break;
    
    case "-":
        result2= (`${+result - +f}`);
        break;
        case "/":
        result2= (`${+result / +f}`);
        break;
        case "*":
        result2= (`${+result  *   +f}`);
        break;
         case "%":
            result2= (`${+result %+f}`)

}

document.write(result2)

