/****************************************************
* PZN stands for Pharmazentralnummer 				*
*													*
* Generic Information about PZN: 					*
* https://de.wikipedia.org/wiki/Pharmazentralnummer *
*													*
* Specification by IFA GmbH							*
* http://pzn8.de/de/home/informationsblaetter		*
****************************************************/


module.exports = {
	isValidPZN: function(isThisPzn) {
		if(!Number.isInteger(parseInt(isThisPzn))) {
			return false;
		}

		var pzn = null;
		if(isThisPzn >= 10000000 || isThisPzn.length == 8) {
			pzn = (isThisPzn).toString();
		} else if (isThisPzn >= 1000000 || isThisPzn.length == 7) {
			pzn = '0'+isThisPzn;
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
};