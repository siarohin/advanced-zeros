module.exports = function getZerosCount(number, base) {

	let prime = {};

 	for (i = 2; i <= base; i++) {

  		while (base % i === 0) {
  			prime[i] ? prime[i] += 1 : prime[i] = 1;
  			base /= i;
  		}
  	}

	function zerosByPrime(number, prime, count) {

	let zerosCount = 0;
		while(number > 0){
			number = Math.floor(number / prime);
			zerosCount += number;
		}

	 	return Math.floor(zerosCount / count);	
	}

	zerosCountArr = [];
		for(key in prime){
			zerosCountArr.push(zerosByPrime(number, +key, prime[key]));
		}

	return Math.min.apply(null, zerosCountArr);

}