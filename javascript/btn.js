document.getElementById("login-btn")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        const pin = document.getElementById('pin').value;
        const convartedPIn = parseInt(pin);
        if ( accountNumber.length === 11){
           if(convartedPIn === 1234){
                window.location.href = "./main.html";
           }else{
            alert('Your pin is wrong!Please enter valid PIN');
           }
        }else{
            alert("Please enter valid ACCOUNT NUMBER");
        }
    })