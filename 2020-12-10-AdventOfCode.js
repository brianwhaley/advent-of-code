var inputs = [
77, 58, 25, 92, 14, 154, 105, 112, 147, 63, 84, 109, 24, 129, 49, 102, 130, 128, 134, 88, 95, 70, 80, 4, 153, 17, 145, 122, 39, 117, 93, 65, 3, 2, 139, 101, 148, 37, 27, 1, 87, 64, 23, 59, 42, 146, 43, 151, 116, 46, 115, 118, 131, 94, 19, 33, 12, 107, 10, 7, 73, 78, 53, 11, 135, 79, 60, 32, 141, 31, 140, 98, 136, 72, 38, 152, 30, 74, 106, 50, 13, 26, 155, 67, 20, 66, 91, 56, 34, 125, 52, 51, 18, 108, 57, 81, 119, 71, 144
// 28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3
];






// ========== PART 1 ========== 





(function(){
    console.log("===== Part 1 =====");
    var oneDiff = 0 , threeDiff = 0 ;
    var parsed = [0, ...inputs] ;
    parsed = parsed.sort((a, b) => {return parseInt(a) - parseInt(b)});
    // parsed[parsed.length] = parsed[parsed.length - 1] + 3 ;
    for (i = 0; i < parsed.length; i++ ){
        (parseInt(parsed[i]) - parseInt(parsed[i-1]) == 1 ) ? oneDiff += 1 : threeDiff += 1 ;
    }
    console.log("oneDiff = " + oneDiff);
    console.log("threeDiff = " + threeDiff);
    console.log(oneDiff * threeDiff);
})();





// ========== PART 2 ==========






(function(){
    console.log("===== Part 2 =====");
    var parsed = [... inputs]; //[0, ...inputs]
    parsed = parsed.sort((a, b) => {return parseInt(a) - parseInt(b)});
    parsed[parsed.length] = parsed[parsed.length - 1] + 3 ;

    var mysteps = [1];
    for(let j = 0; j <= parsed.length + 1; j++){
        item = parsed[j] ;
        mysteps[item] = (mysteps[item - 3] || 0) + (mysteps[item - 2] || 0) + (mysteps[item - 1] || 0) ;
    }
    console.log(mysteps);
    console.log("Total Arrangements = " + mysteps[mysteps.length - 1]) ;
})();
