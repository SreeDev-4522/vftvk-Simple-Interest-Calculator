function compute()
{
    var p = document.getElementById("principal").value;
    if (p <=0){
        alert("Please enter a positive number");
    }
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var i = p * y * r / 100;
    var year = new Date().getFullYear() + parseInt(y);
    var amount = parseInt(i) + parseInt(p);
    document.getElementById("result").innerHTML=(p>0) && "If you deposit <mark>"+p+"\</mark>\, <br\>at an interest rate of <mark>"+r+"%\</mark>\, <br\>You will receive an amount of <mark>"+amount+"\</mark>\, <br\>in the year <mark>"+year+"\</mark> <br\>"
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
} 
