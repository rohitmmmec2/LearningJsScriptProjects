function checkEvenOdd(){
    let inputNumber = document.getElementById("inputNumber").value;
    console.log(inputNumber);
    if(inputNumber % 2 == 0)
    {
        document.getElementById('result').innerHTML ='even number';
    }
    else
    {
        document.getElementById('result').innerHTML ='odd number';
    }
}

function checkMax(num1, num2){
   alert(num1 > num2 ? num1:num2);
}