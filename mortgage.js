const form = document.querySelector(".calculator");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById("mortgageAccount").value);
    const annualRate = parseFloat(document.getElementById("interestRate").value);
    const years = parseFloat(document.getElementById("mortgageTerm").value);

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) -1);

    const totalPayment = monthlyPayment * numberOfPayments;

    const monthlyPaymentOutput = document.getElementById("monthlyPayment");
    const totalPaymentOutput = document.getElementById("totalPayment");

    monthlyPaymentOutput.textContent = "$" + monthlyPayment.toFixed(2);
    totalPaymentOutput.textContent = "$" + totalPayment.toFixed(2);

    photograph.style.display = "none";
    resultTitle.style.display = "none";
    repayments.style.display = "none";

    let isValid = true;

    const radios = document.querySelectorAll("input[type='radio']");

    if(amount === ""){
        isValid = false;
    };

    if(years === ""){
        isValid = false;
    };

    if(annualRate === ""){
        isValid = false;
    };

    let selected = false;
    radios.forEach(radio => {
        if(radio.checked) selected = true;
    });

    if(!selected){
        isValid = false;
    };

    if(isValid){
        alert("Your mortgage repayment has been calculated succesfully. See your estimated monthly and total repayment below.");
        form.reset();
    };
});

