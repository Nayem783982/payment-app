document.getElementById('addMoney')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById("amount").value;
        const convertedAmount = parseFloat(amount);

        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);

        const mainBalance = document.getElementById("mainBalance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        if( convertedPin === 1234){
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("mainBalance").innerText = sum;
            document.getElementById("amount").value = '';
        }else{
            alert("Your PIN is wrong!Enter the new PIN")
        }
    })