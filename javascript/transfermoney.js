document.getElementById("transfer-money-btn")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const transferAmount = document.getElementById("transfer-Amount").value;
        const convertedTransferAmount = parseFloat(transferAmount);

        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);

        const mainBalance = document.getElementById("mainBalance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        if( convertedPin === 1234){
            const sub = convertedMainBalance - convertedTransferAmount;
            document.getElementById("mainBalance").innerText = sub;
            document.getElementById("amount").value = '';
        }else{
            alert("enter valid PIN !")
        }


})