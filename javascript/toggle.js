document.getElementById("add-money-box")
    .addEventListener('click', function () {
    document.getElementById("add-money-section").style.display = "block";
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("transfer-money-section").style.display ="none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display ="none";
    document.getElementById("transaction-section").style.display ="none";

})

document.getElementById("cash-out-box")
.addEventListener('click',function(){
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "block";
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display ="none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-section").style.display ="none";
})


document.getElementById("transfer-money-box")
.addEventListener('click',function(){
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none" ;
    document.getElementById("transfer-money-section").style.display = "block";
    document.getElementById("get-bonus-section").style.display ="none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-section").style.display ="none";
})


document.getElementById("get-bonus-box")
.addEventListener('click',function(){
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none" ;
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display ="block";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-section").style.display ="none";
})


document.getElementById("pay-bill-box")
.addEventListener('click',function(){
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none" ;
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display =  "none";
    document.getElementById("pay-bill-section").style.display = "block";
    document.getElementById("transaction-section").style.display ="none";
})


document.getElementById("transaction-box")
.addEventListener('click',function(){
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none" ;
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display =  "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-section").style.display ="block";
})