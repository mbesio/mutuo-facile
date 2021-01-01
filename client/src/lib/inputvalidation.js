// a set of functions to parse the input string

const inputValidation = {
  // convert European format numbers to US format numbers
  parseInput(inputString) {
    var inputArray = inputString.split('');
    var commasToDotsArray = inputArray.map( (item) => {
      if (item === ',') {
        return '.'
      } else if (item === ' ') {
        return '';
      } else {
        return item;
      }
    })
    var parsedInputString = commasToDotsArray.join('');
    return parsedInputString;
  },
  // remove the percentage sign if someone inputs a number with a percentage sign
  parsePercentage(inputString) {
    var lastElement = inputString.slice(-1);
      if (lastElement === '%') {
        return inputString.substring(0, inputString.length -1)
      } else {
        return inputString;
      }
  },
  // check if the input is a valid number
  convertValidStringToNumber(inputString) {
    if ( isNaN(inputString) ) {
      return false;
    } else {
      return true;
    }
  }

}

export default inputValidation;