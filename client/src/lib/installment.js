// function to calculate the installment amount
var monthlyInstallment = (importo, tasso, durata) => {
  var tassoPercentage = tasso/100;

  var numerator = importo * tassoPercentage;

  var powerBase = 1+(tassoPercentage/12);
  var powerExponent = -12 * durata;

  var denominator = 12 * (1-(Math.pow(powerBase, powerExponent)));

  return (numerator / denominator).toFixed(2);
}

export default monthlyInstallment;