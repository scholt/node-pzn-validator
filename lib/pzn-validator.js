function isValidPZN(input) {
  /*****************************************************
   * PZN stands for Pharmazentralnummer 				*
   *													*
   * Generic Information about PZN: 					*
   * https://de.wikipedia.org/wiki/Pharmazentralnummer *
   *													*
   * Specification by IFA GmbH							*
   * http://pzn8.de/de/home/informationsblaetter		*
   ****************************************************/

  if(!Number.isInteger(parseInt(input))) {
    return false;
  }

  var pzn = null;
  if(input.length == 7) {
    pzn = '0'+input;
  } else if (input.length == 8) {
    pzn = input;
  } else {
    return false;
  }

  var sum = 0;
  var i;
  for (i = 1; i < 8; i++) {
    sum += i * parseInt(pzn.charAt(i-1));
  }

  if(sum % 11 == pzn.charAt(7)) {
    return true;
  }

  return false;
}


module.exports = isValidPZN;