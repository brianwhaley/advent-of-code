var inputs = [
"L90", "F82", "R90", "F57", "L90", "F21", "W4", "S2", "L90", "W5", "R90", "F84", "E1", "R90", "S4", "F13", "E3", "N2", "W4", "F33", "W1", "F48", "E4", "F86", "R90", "S3", "F58", "S4", "F86", "R270", "N1", "L270", "S5", "R90", "E4", "L90", "F72", "S4", "W3", "S1", "F85", "N5", "R180", "F8", "S5", "R90", "N5", "F18", "R90", "S4", "F62", "W1", "F19", "E3", "L90", "E3", "F3", "R180", "E3", "N1", "F49", "E5", "N5", "L90", "E4", "F52", "N1", "W1", "N3", "F84", "W1", "W5", "F32", "S2", "E1", "L180", "W3", "F79", "N1", "W3", "F17", "S5", "E5", "F40", "N4", "F37", "N2", "R180", "N1", "E5", "F57", "E4", "F23", "N1", "W4", "L90", "F21", "N2", "R90", "S4", "R180", "W4", "N4", "R180", "W3", "N5", "L90", "F10", "F70", "S1", "F32", "R90", "F82", "W5", "W2", "L90", "F74", "L90", "F59", "S3", "L90", "N4", "L90", "E5", "F46", "E2", "F90", "W3", "L90", "E4", "R90", "W1", "F84", "L90", "W4", "N3", "E1", "L90", "W3", "F51", "L180", "F27", "R90", "S2", "W3", "L90", "N3", "L90", "S4", "F31", "W2", "F42", "R180", "F97", "E5", "S2", "W5", "L90", "E2", "L90", "E5", "S1", "F22", "L90", "F26", "W5", "R180", "F10", "N1", "F9", "R90", "W2", "W2", "N1", "F61", "R180", "W1", "N4", "L90", "W3", "S2", "E2", "L180", "F24", "L90", "E1", "L90", "N5", "F56", "R180", "W1", "S3", "F32", "L90", "F58", "E5", "R90", "F74", "N5", "R90", "S4", "F58", "L90", "F91", "S5", "R90", "F16", "N4", "R270", "F38", "W2", "R90", "W3", "R90", "F51", "E5", "F54", "N5", "F46", "R90", "W3", "R90", "W3", "F59", "R90", "N4", "F86", "N1", "E4", "N3", "W2", "N4", "E5", "R90", "F35", "L90", "E1", "S4", "W1", "S3", "F3", "L180", "E5", "F49", "N2", "F67", "L90", "S1", "R90", "E3", "F100", "L180", "E4", "N3", "F95", "L180", "N2", "E3", "N4", "L90", "N1", "L90", "F9", "L90", "F21", "N2", "F24", "L90", "W1", "F43", "W3", "F63", "N5", "R90", "S3", "F64", "R180", "R180", "N2", "F91", "W1", "S5", "E4", "R90", "F77", "W2", "N3", "F16", "S2", "F10", "N5", "F36", "R90", "S3", "F34", "R270", "R90", "F45", "N5", "R90", "F37", "S5", "R90", "W3", "S4", "F11", "S1", "R90", "W3", "R90", "S4", "W5", "N3", "F25", "S1", "N4", "W4", "R90", "N2", "L270", "F82", "N2", "F71", "E2", "F54", "L90", "S2", "F26", "E2", "F94", "S3", "F73", "R90", "S2", "F32", "N5", "F57", "E1", "R90", "W3", "S5", "E4", "L90", "S4", "W2", "R90", "E3", "R180", "F56", "N5", "F89", "F57", "F32", "E2", "S2", "F94", "N4", "L90", "F98", "R90", "S2", "L90", "L90", "N5", "L90", "F47", "W1", "L270", "F32", "N3", "N3", "W3", "F70", "S5", "W3", "F40", "S1", "E5", "L180", "E1", "N2", "E3", "R90", "F76", "S4", "W1", "R90", "F49", "S1", "F84", "W5", "F85", "L270", "R90", "E2", "R90", "E2", "W4", "R90", "W3", "L90", "F67", "R90", "N3", "W4", "R180", "F15", "S4", "R90", "F1", "L270", "S3", "E4", "R90", "L90", "N4", "E5", "F25", "W4", "W3", "N3", "L90", "N4", "L180", "W2", "N2", "F96", "R90", "E2", "N4", "R90", "W2", "F86", "F35", "W3", "S5", "L180", "W2", "L90", "W4", "N3", "L90", "W5", "F79", "W4", "R180", "F16", "W3", "S5", "W5", "N5", "F39", "S3", "F76", "S3", "F78", "W3", "F99", "N3", "F69", "S3", "E2", "S5", "R180", "F29", "R90", "F65", "N3", "E4", "F5", "R90", "E1", "F77", "N3", "W4", "F57", "E4", "L90", "N5", "R180", "S3", "W1", "R90", "S2", "F26", "S2", "L90", "S2", "F88", "S2", "R90", "S5", "N3", "L180", "F22", "E1", "F23", "L90", "R90", "N3", "W5", "R90", "W2", "F41", "L90", "F70", "F35", "R180", "F37", "E5", "R90", "E1", "S3", "F41", "L90", "E3", "F80", "S1", "F53", "R90", "N3", "R90", "F94", "N3", "R90", "F79", "R270", "F38", "L90", "E1", "L90", "E1", "F64", "N4", "F78", "S5", "E1", "N3", "L90", "E4", "S5", "E5", "L90", "S3", "F72", "L90", "F15", "L180", "E5", "S3", "L90", "S3", "E2", "L90", "F49", "N1", "L90", "W3", "N2", "F32", "R90", "F47", "E2", "S3", "E4", "F23", "L270", "E3", "R90", "S5", "F58", "E4", "S4", "F81", "R90", "E3", "R90", "F66", "W5", "F35", "S5", "E4", "R90", "F29", "W3", "F76", "E5", "S2", "F76", "N4", "F93", "L90", "E3", "R90", "F35", "L90", "F13", "R90", "S3", "R90", "N3", "L90", "F87", "E2", "N4", "F86", "R90", "N1", "L180", "E1", "S3", "F34", "E4", "F31", "E5", "F57", "S4", "L90", "W3", "L90", "S3", "R90", "F56", "S2", "W4", "S5", "F21", "S2", "L180", "W5", "S2", "L90", "F53", "S1", "N3", "E4", "R90", "E4", "L180", "S4", "E5", "L180", "S3", "F48", "S3", "F24", "S5", "L90", "E3", "F53", "N2", "F30", "L90", "E5", "F51", "S1", "L90", "S1", "E1", "L90", "F11", "N2", "R180", "F41", "N5", "F72", "L90", "F90", "N3", "F7", "W2", "R180", "E2", "L180", "E4", "S3", "F23", "R90", "F72", "W1", "L90", "N1", "E3", "F3", "E4", "R180", "L180", "N2", "F83", "W1", "L90", "W3", "N2", "F27", "W3", "N2", "R90", "N5", "E2", "F93", "L90", "F51", "N3", "W5", "S4", "W3", "R90", "F24", "R270", "N1", "R90", "F34", "R90", "W2", "F91", "S5", "L90", "S1", "F14", "R180", "S4", "W3", "N4", "R90", "N1", "W3", "F66", "R180", "S3", "E1", "L90", "F76", "N2", "W3", "S3", "F87", "E4", "L180", "N2", "L90", "N1", "E2", "S3", "F63", "W1", "F90", "S3", "L270", "E4", "F19", "R90", "E5", "L180", "S1", "R90", "F45", "R90", "S5", "L90", "F21", "R180", "F29", "N5", "E3", "R180", "F9", "R90", "E4", "F94", "S4", "F79", "E1", "L90", "N3", "F96", "E4", "F32", "E3", "R270", "N5", "R180", "E5", "F46"
];






// ========== PART 1 ========== 



/* 
Action N means to move north by the given value.
Action S means to move south by the given value.
Action E means to move east by the given value.
Action W means to move west by the given value.
Action L means to turn left the given number of degrees.
Action R means to turn right the given number of degrees.
Action F means to move forward by the given value in the direction the ship is currently facing.
*/

function navigate(arr){
	let pos = [0, 0, 90] ;
	for (i = 0; i < arr.length; i+=1) {
		var dir = arr[i].substring(0,1);
		var dist = parseInt(arr[i].substring(1, arr[i].length));
		switch(dir){
			// Y = N/S, X = E/W
			case "N": 
				pos[1] = pos[1] + dist ; break;
			case "S":
				pos[1] = pos[1] - dist ; break;
			case "E":
				pos[0] = pos[0] + dist ; break ;
			case "W":
				pos[0] = pos[0] - dist ; break ;
			case "R":
				pos[2] = pos[2] + dist ; 
				if (pos[2] >= 360) pos[2] = pos[2] - 360;
				break;
			case "L":
				pos[2] = pos[2] - dist ;
				if (pos[2] < 0) pos[2] = 360 + pos[2] ;
				break;
			case "F":
				switch(pos[2]){
					case 0: // N
						pos[1] = pos[1] + dist ; break;
					case 180: // S
						pos[1] = pos[1] - dist ; break;
					case 90: // E
						pos[0] = pos[0] + dist ; break ;
					case 270: // W
						pos[0] = pos[0] - dist ; break ;
				}
		}
		// console.log(arr[i] + " = " + pos);
	}
	console.log(pos);
	return pos ;
}




/* 
Action N means to move the waypoint north by the given value.
Action S means to move the waypoint south by the given value.
Action E means to move the waypoint east by the given value.
Action W means to move the waypoint west by the given value.
Action L means to rotate the waypoint around the ship left (counter-clockwise) the given number of degrees.
Action R means to rotate the waypoint around the ship right (clockwise) the given number of degrees.
Action F means to move forward to the waypoint a number of times equal to the given value.
*/

function waypoint(arr){
	let pos = [0, 0] ;
	let waypt = [10, 1] ;
	for (i = 0; i < arr.length; i+=1) {
		var dir = arr[i].substring(0,1);
		var dist = parseInt(arr[i].substring(1, arr[i].length));
		switch(dir){
			// Y = N/S, X = E/W
			case "N": 
				waypt[1] = waypt[1] + dist ; break;
			case "S":
				waypt[1] = waypt[1] - dist ; break;
			case "E":
				waypt[0] = waypt[0] + dist ; break ;
			case "W":
				waypt[0] = waypt[0] - dist ; break ;
			case "R":
				switch(dist){
					case 90: 
						waypt.reverse();
						waypt[1] = -1 * waypt[1] ; break ;
					case 180:
						waypt[0] = -1 * waypt[0] ; waypt[1] = -1 * waypt[1] ; break ;
					case 270: 
						waypt.reverse();
						waypt[0] = -1 * waypt[0] ; break ;
				}
				break;
			case "L":
				switch(dist){
					case 90: 
						waypt.reverse();
						waypt[0] = -1 * waypt[0] ; break ;
					case 180:
						waypt[0] = -1 * waypt[0] ; waypt[1] = -1 * waypt[1] ; break ;
					case 270: 
						waypt.reverse();
						waypt[1] = -1 * waypt[1] ; break ;
				}
				break;
			case "F":
				pos[0] = pos[0] + ( waypt[0] * dist ) ;
				pos[1] = pos[1] + ( waypt[1] * dist ) ;
		}
		// console.log(arr[i] + " = pos " + pos + " and Waypoint "+ waypt);
	}
	console.log(pos);
	return pos ;
}




(async function(){
    console.log("===== Part 1 =====");
	var pos = navigate(inputs);
	console.log( "Manhattan Distance = " + (Math.abs(pos[0]) + Math.abs(pos[1]) ) ) ;
})();





// ========== PART 2 ==========






(function(){
    console.log("===== Part 2 =====");
	var pos = waypoint(inputs);
	console.log( "Manhattan Distance = " + (Math.abs(pos[0]) + Math.abs(pos[1]) ) ) ;
})();
// 2024 too low
// 66045 too high


