function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var i = p * r * t / 100;
    var a = parseInt(p) + parseFloat(i);
    var result = document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(t);
    
    if(p <= 0){
        alert("Principal Error: Enter a positive Number.");
        document.getElementById("principal").focus();
    } else {
        result.innerHTML = "If you deposit $" + p + ", \<br\>at an interest rate of " + r + "%\<br\>You will recieve an amount of $" + i + ",\<br\>in the year " + year + "\<br\>";
    }
    
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
