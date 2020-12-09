var inputs = [

];






// ========== PART 1 ========== 





function parseInput(input){	
	// input.map(item => item.split(" contain "));
	// input.map(item[1] => item[1].split(", "));
	var arr = [] ;
	for (i = 0; i < input.length; i++) {
		var arr1 = input[i].split(" contain ");
		var arr2 = arr1[1].split(", ");
		var arr3 = {} ;
		arr3[arr1[0]] = arr2 ;
		arr.push(arr3);
	}
    console.log(arr);
	return arr ;
}

(async function(){
    console.log("===== Part 1 =====");
	var parsed = parseInput(inputs);
	console.log(parsed);
	var arrBags = await countOuterBags(parsed, "shiny gold bag") ;
	console.log(arrBags);
	console.log("Counted Outer Bags = " + arrBags.length);
})();





// ========== PART 2 ==========






(function(){
    console.log("===== Part 2 =====");
	var parsed = parseInput(inputs);
})();


