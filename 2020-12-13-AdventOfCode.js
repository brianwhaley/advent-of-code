var earliest = "1002576";

var inputs = [
	"13", "x", "x", "x", "x", "x", "x", "37", "x", "x", "x", "x", "x", "449", "x", "29", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "19", "x", "x", "x", "23", "x", "x", "x", "x", "x", "x", "x", "773", "x", "x", "x", "x", "x", "x", "x", "x", "x", "41", "x", "x", "x", "x", "x", "x", "17"
];






// ========== PART 1 ========== 





function parseInput(input){	
	// input.map(item => item.split(" contain "));
	// input.map(item[1] => item[1].split(", "));
	var arr = [] ;
	arr = input.filter(id => id != "x") ;
	arr = arr.map(id => parseInt(id));
    console.log(arr);
	return arr ;
}

(async function(){
    console.log("===== Part 1 =====");
	var parsed = parseInput(inputs);
	var busTimes = [];
	for(i=0; i<parsed.length; i++){
		var closestTime = parsed[i] * ( Math.ceil(earliest/parsed[i]) ) ;
		var diff = closestTime - earliest ;
		busTimes[i] =  [ parsed[i] , closestTime, diff, parsed[i] * diff ] ;
	}
	busTimes.sort((a,b) => a[2] - b[2]);
	console.log(busTimes);
	console.log("Bus ID * Wait Time = " + busTimes[0][3]);
	// 3865
})();





// ========== PART 2 ==========




function lcm(arr){
	const gcd = (a, b) => a ? gcd(b % a, a) : b;
	const lcm = (a, b) => a * b / gcd(a, b);
	var ans = arr.reduce(lcm); 
	return ans ;
}

(function(){
    console.log("===== Part 2 =====");
	var parsed = parseInput(inputs);

	let t = 100000000000000 // start here
	let i = 0
	let s = 1
	while (i < inputs.length) {
		if (inputs[i] == 'x') i++
		else {
			if ((t + i) % inputs[i] == 0) {
				s *= inputs[i]
				i++
			} else {
				t += s
			}
		}
	}
	console.log("Bus IDs depart at offset = " + t)
	// 4299230882 too low
	// 1474630201287997 too high
	// 415579909629976
})();


