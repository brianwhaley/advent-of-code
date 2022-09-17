//const INPUT = [ 3, 8, 9, 1, 2, 5, 4, 6, 7 ]; // TEST input
const INPUT = [ 3, 9, 8, 2, 5, 4, 7, 1, 6 ]; // PROD input




// ========== PART 1 ========== 



/*
(function(){
    console.log("===== Part 1 =====");

    const MOVES = 100;

    const inputCups = INPUT.map(label => ({
        label,
        clockwise: undefined,
        counterClockwise: undefined
    }));

    inputCups.forEach((cup, i) => {
        const clockwise = inputCups[(i + 1) < inputCups.length ? (i + 1) : 0];
        const counterClockwise = inputCups[(i - 1) >= 0 ? (i - 1) : (inputCups.length - 1)];
        
        cup.clockwise = clockwise;
        clockwise.counterClockwise = cup;
        cup.counterClockwise = counterClockwise;
        counterClockwise.clockwise = cup;
    });

    const minCupValue = INPUT.reduce((min, curr) => Math.min(min, curr), INPUT[0]);
    const maxCupValue = INPUT.reduce((max, curr) => Math.max(max, curr), INPUT[0]);

    function insertClockwise(cup, next) {
        const nextNext = cup.clockwise;
        next.clockwise = nextNext;
        next.counterClockwise = cup;
        cup.clockwise = next;
        nextNext.counterClockwise = next;
    }

    function insertCounterClockwise(cup, next) {
        const nextNext = cup.counterClockwise;
        next.counterClockwise = nextNext;
        next.clockwise = cup;
        cup.counterClockwise = next;
        nextNext.clockwise = next;
    }

    function removeCup(cup) {
        cup.clockwise.counterClockwise = cup.counterClockwise;
        cup.counterClockwise.clockwise = cup.clockwise;
    }

    let currentCup = inputCups[0];

    function findInsertionCup(rCups) {
        let targetValue = currentCup.label;
        do {
            targetValue--;
            if (targetValue < minCupValue) {
                targetValue = maxCupValue;
            }
        } while (rCups.some(rCup => rCup.label === targetValue));
        let currCup = currentCup.clockwise;
        while (currCup.label !== targetValue) {
            currCup = currCup.clockwise;
        }

        return currCup;
    }

    function playMove(round) {
        const rCups = [];
        for (let i = 0; i < 3; i++) {
            const rCup = currentCup.clockwise;
            removeCup(rCup);
            rCups.push(rCup);
        }
        const insertionCup = findInsertionCup(rCups);
        let insertCup = insertionCup;
        for (const currCup of rCups) {
            insertClockwise(insertCup, currCup);
            insertCup = currCup;
        }
        console.log(`Move ${ String(round).padStart(3) }: ${ getSequence().map(v => {
            if (v === currentCup.label) {
                return `[${ v }]`;
            } else if (rCups.some(rCup => rCup.label === v)) {
                return `(${ v })`;
            } else {
                return ` ${ v } `;
            }
        }).join('') }`);
        currentCup = currentCup.clockwise;
    }

    function playAllMoves() {
        console.log(`Start:    ${ getSequence().map(v => ` ${ v } `).join('') }`);
        for (let i = 0; i < MOVES; i++) {
            playMove(i + 1);
        }
        console.log(`Final:    ${ getSequence().map(v => ` ${ v } `).join('') }`);
    }

    function getSequence() {
        let startCup = inputCups[0];
        while (startCup.label !== 1) {
            startCup = startCup.clockwise;
        }
        const sequence = [ startCup.label ];
        for (let currCup = startCup.clockwise; currCup !== startCup; currCup = currCup.clockwise) {
            sequence.push(currCup.label);
        }
        return sequence;
    }

    playAllMoves();
    console.log(`Part 1: The final sequence is "${ getSequence().slice(1).join('') }".`);
})();
// 45798623
*/




// ========== PART 2 ==========






(function(){
    console.log("===== Part 2 =====");

    const MOVES = 10000000;

    /**
     * @typedef {object} Cup
     * @property {number} label
     * @property {Cup} clockwise
     * @property {Cup} counterClockwise
     */

    /** @typedef {Cup[]} */
    const inputCups = INPUT.map(label => ({
        label,
        clockwise: undefined,
        counterClockwise: undefined
    }));
    const initialInputMax = INPUT.reduce((max, curr) => Math.max(max, curr), 0);
    for (let i = 0; i < (1000000 - INPUT.length); i++) {
        const label = initialInputMax + 1 + i;
        inputCups.push({
            label,
            clockwise: undefined,
            counterClockwise: undefined
        });
    }
    inputCups.forEach((cup, i) => {
        const clockwise = inputCups[(i + 1) < inputCups.length ? (i + 1) : 0];
        const counterClockwise = inputCups[(i - 1) >= 0 ? (i - 1) : (inputCups.length - 1)];
        
        cup.clockwise = clockwise;
        clockwise.counterClockwise = cup;
        cup.counterClockwise = counterClockwise;
        counterClockwise.clockwise = cup;
    });

    function getCupByValue(value) {
        if (value < 1) {
            value = 1000000 - value;
        }

        if (value <= initialInputMax) {
            return inputCups.find(cup => cup.label === value);
        } else {
            return inputCups[value - 1];
        }
    }

    function insertClockwise(cup, next) {
        // get original next
        const nextNext = cup.clockwise;

        // point next to cup and nextNext
        next.clockwise = nextNext;
        next.counterClockwise = cup;

        // point cup to next
        cup.clockwise = next;

        // point nextNext to next
        nextNext.counterClockwise = next;
    }

    function insertCounterClockwise(cup, next) {
        // get original next
        const nextNext = cup.counterClockwise;

        // point next to cup and nextNext
        next.counterClockwise = nextNext;
        next.clockwise = cup;

        // point cup to next
        cup.counterClockwise = next;

        // point nextNext to next
        nextNext.clockwise = next;
    }

    function removeCup(cup) {
        cup.clockwise.counterClockwise = cup.counterClockwise;
        cup.counterClockwise.clockwise = cup.clockwise;
    }

    let currentCup = inputCups[0];

    /** @param {Cup[]} rCups */
    function findInsertionCup(rCups) {
        let targetValue = currentCup.label;

        // find a value that is not in the removed
        do {
            targetValue--;
            if (targetValue < 1) {
                targetValue = 1000000;
            }
        } while (rCups.some(rCup => rCup.label === targetValue));

        // Find the cup
        return getCupByValue(targetValue);
    }

    function playMove() {
        // pick up cups
        const rCups = [];
        for (let i = 0; i < 3; i++) {
            const rCup = currentCup.clockwise;
            removeCup(rCup);
            rCups.push(rCup);
        }

        // find insertion point
        const insertionCup = findInsertionCup(rCups);

        // insert cups
        let insertCup = insertionCup;
        for (const currCup of rCups) {
            insertClockwise(insertCup, currCup);
            insertCup = currCup;
        }

        // select new current
        currentCup = currentCup.clockwise;
    }

    function playAllMoves() {
        for (let i = 0; i < MOVES; i++) {
            playMove();
        }
    }

    function getSequence() {
        let startCup = inputCups[0];
        while (startCup.label !== 1) {
            startCup = startCup.clockwise;
        }

        const sequence = [ startCup.label ];
        for (let currCup = startCup.clockwise; currCup !== startCup; currCup = currCup.clockwise) {
            sequence.push(currCup.label);
        }
        return sequence;
    }

    // Part 2
    playAllMoves();
    const cup1 = getCupByValue(1);
    const cup2 = cup1.clockwise;
    const cup3 = cup2.clockwise;
    console.log(`Part 2: The final result is ${ cup2.label } x ${ cup3.label } = ${ BigInt(cup2.label) * BigInt(cup3.label) }.`);
})();


