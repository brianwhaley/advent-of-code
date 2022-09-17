var inputStart = 353096 ;
var inputEnd = 843212 ;

// var inputStart = 444443 ;
// var inputEnd = 456789 ;

(function(){
	var isValidPW = 0 ;
	var isValidPW2 = 0
	for (i = inputStart ; i <= inputEnd; i+=1) {
		if ( isSixDigits(i) && isWithinRange(i) && hasAdjacent(i) && isIncreasing(i) ) {
			isValidPW += 1 ;
			if (hasOnlyAdjacent(i)) isValidPW2 += 1 ;
		}
	}
    console.log("===== Part 1 =====");
	console.log( " Valid Passwords - " + isValidPW );
    console.log("===== Part 2 =====");
	console.log( " Valid Passwords #2 - " + isValidPW2 );
	return false;
})();

function isSixDigits(pw) {
	return ( (pw.toString().length) == 6 );
}

function isWithinRange(pw){
	return ( pw >= inputStart && pw <= inputEnd );
}

function hasAdjacent(pw){
	var pwArr = pw.toString().split("");
	var pwAdj = pwArr.filter( (e, i, a) => e == a[(i-1)] );
	return ( pwAdj.length > 0) ;
	// for ( i = 0 ; i < pwArr.length ; i ++ ) {
	//	if( pwArr[i] == pwArr[i+1]) pwCount += 1 ;
	//}
	//return pwCount > 0 ;
}

function hasOnlyAdjacent(pw){
	var pwCount = 0 ;
	var pwArr = pw.toString().split("");
	var pwAdj = pwArr.filter( function(e, i, a) {
  		if( ( pwArr[i] == pwArr[i+1] ) && ( pwArr[i] != pwArr[i+2] )  && ( pwArr[i] != pwArr[i-1] ) ) pwCount += 1 ;
	});
	return (pwCount > 0) ;
}

function isIncreasing(pw){
	var pwArr = pw.toString().split("");
	var pwInc = pw.toString().split("").sort();
	return ( pwArr.toString() == pwInc.toString() ) ;
}