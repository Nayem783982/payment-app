document.getElementById("cashout-btn")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOutAmount = document.getElementById("cash-out-amount").value;
        const convertedCashOutAmount = parseFloat(cashOutAmount);

        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);

        const mainBalance = document.getElementById("mainBalance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        if( convertedPin === 1234){
            const sub = convertedMainBalance - convertedCashOutAmount;
            document.getElementById("mainBalance").innerText = sub;
            document.getElementById("amount").value = '';
        }else{
            alert("enter valid PIN !")
        }


})