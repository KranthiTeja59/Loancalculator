
function calculateLoan() {
    laV = document.getElementById("la").value;
    irV = document.getElementById("ir").value;
    mtpV = document.getElementById("mtp").value;
  
    interest = (laV * (irV * 0.01)) / mtpV;
  
    monthlyPayment = (laV / mtpV + interest).toFixed(2);
  
    document.getElementById("payment").innerHTML= `Monthly Payment: ${monthlyPayment}`;
  }