// function to calculate the percentage number format
var convertPercentageNumberFormatFromEuToUs = (europeanNumber) => {

    let indexOfComma = europeanNumber.indexOf(',')
    let lengthOfFormattedNumeber = europeanNumber.length
    let europeanNumberBeforeComma = ''
    let europeanNumberAfterComma = ''
    let americanNumber
    if (indexOfComma === -1) {
      europeanNumberBeforeComma = europeanNumber.substring(0,2)
      americanNumber = `${europeanNumberBeforeComma}`

    } else if(indexOfComma === lengthOfFormattedNumeber-1) {
      americanNumber = `${europeanNumber}`

    } else {
      if (indexOfComma >= 2) {
        europeanNumberBeforeComma = europeanNumber.substring(0,2)
      } else if (indexOfComma === 1) {
        europeanNumberBeforeComma = europeanNumber.substring(0,1)
      } else if(indexOfComma === 0) {
        europeanNumberBeforeComma = '0'
      }

      europeanNumberAfterComma = europeanNumber.substring(indexOfComma+1, indexOfComma +3)

      americanNumber = `${europeanNumberBeforeComma},${europeanNumberAfterComma}`
    }
    return americanNumber

}

export default convertPercentageNumberFormatFromEuToUs;