/*small script that returns 
prime numbers between 1 and 1000 */
var primes = [3,5,7], i, c, conc = 1;

for (i = 11; i < 1000; i += 2) {
	for (X in primes){
	conc += " && " + i + "%" + primes[X] + " != 0 ";
	}
	
	c = eval(conc);
	if(c){
		primes.push(i);
	};
conc = 1;
}
primes.unshift(1,2);
console.log(primes);