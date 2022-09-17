var inputs = [
	18,11,9,0,5,1
];

var inputs2 = { 
	18 : 1 ,
	11 : 2 ,
	9 : 3 ,
	0 : 4 ,
	5 : 5 ,
	1 : 6
} ;

// ========== PART 1 ========== 

/* 
each turn results in that player speaking aloud either 0 
(if the last number is new) or an age (if the last number is a repeat).
If it had been spoken before, the next number to speak is the difference between 
the turn number when it was last spoken (the previous turn, 4) and 
the turn number of the time it was most recently spoken before then
*/

function getNthSpoken(said, max){
	do {
		var last = said[said.length - 1] ;
		// console.log(said.length - 1 + " = " + last );
		var instances = said.reduce(function(a, e, i) {
			if (e === last) a.push(i);
			return a;
		}, []) ;
		if ( instances.length >= 2) {
			var last2 = instances.slice(instances.length - 2); 
			said.push(last2[1] - last2[0]) ;
		} else {
			said.push(0);
		}
		if (said.length % 10000 == 0) console.log(said.length);
	} while (said.length < max) ;
	return said[said.length - 1]
}

( function(){
	console.log("===== Part 1 =====");
	var said = [...inputs] ;
	var max = 2020 ;
	var lastSpoken = getNthSpoken(said, max) ;
	console.log(said);
	console.log("2020th Value = " + said[said.length - 1]);
})();
// 959



// ========== PART 2 ==========


function getNthSpokenv2(said, max){
	
	var count = 7 ;
	var last = 0 ;
	while (count < max ) {
		if(said[last]){
			var next = count - parseInt(said[last]) ;
			said[last] = count ;
			last = next ;
		} else {
			said[last] = count ;
			last = 0 ;
		}
		count += 1;
	} 
	console.log(count + " = " + last);
	return last ;
}

(function(){
	console.log("===== Part 2 =====");
	var said = JSON.parse(JSON.stringify(inputs2));;
	var max = 30000000 ;
	// var max = 2020 ;
	var lastSpoken = getNthSpokenv2(said, max) ;
	console.log(said);
	console.log("30,000,000 th Value = " + lastSpoken);
})();
// 1381613 too high