function gcd(num1,num2){
    var num1,num2,i,lcm,product,gcd;
   
    num1 = num1.value;
    num2 = num2.value;
    if(!isNaN(num1) && !isNaN(num2)){   //Check both are numbers or not.
        product = num1 * num2;
        if(num1 > num2){
            i = num1;
        }else
        i = num2;
        for(;;i++){         //find LCM of two numbers
            if(i % num1 == 0 && i % num2 == 0){
                lcm = i;
                break;
            }
        }
        gcd = product / lcm;
        document.getElementById("gcd").innerText =`Output :- GCD of ${num1} & ${num2} is :- ${gcd}`;
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        return gcd;
    }
    else{
        document.getElementById("gcd").innerHTML = `<strong>Error - </strong> Enter numbers only.`;
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
    }
}
