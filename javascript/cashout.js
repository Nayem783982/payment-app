document.getElementById("Cash-Out-btn")
    .addEventListener('click', function (event) {
        event.preventDefault();

        const agentNumber = document.getElementById('agent-number').value;

        const cashOutAmount = document.getElementById("cash-out-amount").value;
        const convertedCashOutAmount = parseFloat(cashOutAmount);

        const pin = document.getElementById("pin1").value;
        const convertedPin = parseInt(pin);

        const mainBalance = document.getElementById("mainBalance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        if(agentNumber.length === 11 ){
            if(convertedPin === 1234){
                const sub = convertedMainBalance - convertedCashOutAmount;
                document.getElementById("mainBalance").innerText = sub;
                document.getElementById("cash-out-amount").value = '';
                document.getElementById("pin1").value = '';
                document.getElementById('agent-number').value = '';
            }
            else{
                alert("Enter valid PIN !");
            }
        }else{
            alert("Enter valid AGENT-NUMBER !");
        }
})