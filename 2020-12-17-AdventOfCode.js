var chunk = `##.#####
#.##..#.
.##...##
###.#...
.#######
##....##
###.###.
.#.#.#..`;

// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// process.stdin.on('data', function (chunk) {
(function () {
	const lines = chunk.toString().split('\n').filter(item => item);
    // Write your code here
    /**
     * Runs Game of Life in N dimensions.
     * With given input of M dimensions and grid size.
     * For X number of simulation cycles.
     * 
     * @param {Number} dimensions 
     * @param {Number} inputDimensions 
     * @param {Number} gridSize 
     * @param {Map} input 
     * @param {Number} simulationCycles 
     */
    const runGameOfLife = (dimensions, inputDimensions, gridSize, input, simulationCycles) => {
        // Create a map with dimensions not covered in input.
        // Example, input can be a 2 dimension plane while the map to
        // be constructed has 4 dimensions.
        let map = new Map();
        let curr = map; 
        for (let i = dimensions; i > inputDimensions + 1; i--) {
            curr.set(0, new Map());
            curr = curr.get(0);
        }
        // Set the input map as the 0th element.
        curr.set(0, input);

        /**
         * Returns an item from N dimension map.
         * Returns inactive item if the item is not present in map.
         * 
         * @param  {...any} units 
         */
        const getItem = (...units) => {
            let curr = map;
            while (true) {
                // Shift through each coordinate and check if the item is available.
                // Move to the next item. If no more coordinate is left return the
                // item or return an inactive item.
                const next = units.shift();
                if (units.length) {
                    if (curr.has(next)) {
                        curr = curr.get(next);
                    } else {
                        return '.';
                    }
                } else {
                    return curr.get(next) || '.';
                }
            }
        }

        /**
         * Returns number of active neighbors for the given coordinate.
         * 
         * @param {Array<Number>} coordinates 
         * @param {Array<Number>} p 
         */
        const getActiveNeighborsCount = (coordinates, p = []) => {
            if (p.length < coordinates.length) {
                // We need to go deeper.
                let count = 0;
                // Neighbors for the current coordinate.
                for (let i = -1; i <= 1; i++) {
                    count += getActiveNeighborsCount(coordinates, [...p, coordinates[p.length] + i]);
                }
                return count;
            } else {
                // This is it!
                // Checking if the point is same is as the given coordinate.
                let same = true;
                for (let i = 0; i < coordinates.length && same; i++) {
                    if (coordinates[i] !== p[i]) {
                        same = false;
                    }
                }

                if (!same) {
                    // Return 1 if active neighbor is found.
                    if (getItem(...p) === '#') {
                        return 1;
                    } else {
                        return 0;
                    }
                } else {
                    // Same coordinate is to be ignored.
                    return 0;
                }
            }
        }

        /**
         * Populates the new given newMap recursively.
         * currentDimension and cycle is used to keep track of the
         * size of the loop that needs to be run.
         * 
         * @param {Map} newMap 
         * @param {Number} currentDimension 
         * @param {Number} cycle 
         * @param {Array<Number>} coordinates 
         */
        const constructMap = (newMap, currentDimension, cycle, coordinates) => {
            if (currentDimension > 1) {
                // We have to go Deeper
                if (currentDimension > inputDimensions) {
                    // We haven't reached the input dimensions yet.
                    // Loop will be shorter.
                    for (let p = -1 * cycle; p <= cycle; p++) {
                        newMap.set(p, new Map());
                        constructMap(newMap.get(p), currentDimension - 1, cycle, [...coordinates, p]);
                    }
                } else {
                    // We have reached the input dimension.
                    // Loop will be longer.
                    for (let p = -1 * cycle; p < gridSize + cycle; p++) {
                        newMap.set(p, new Map());
                        constructMap(newMap.get(p), currentDimension - 1, cycle, [...coordinates, p]);
                    }
                }
            } else {
                // This is it.
                // Loop for each element in the last coordinate.
                for (let x = -1 * cycle; x < gridSize + cycle; x++) {
                    let current = getItem(...coordinates, x);
                    let count = getActiveNeighborsCount([...coordinates, x]);

                    /**
                     * If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active.
                     * Otherwise, the cube becomes inactive.
                     * 
                     * If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active.
                     * Otherwise, the cube remains inactive.
                     */
                    if (current === '#') {
                        if (count === 2 || count === 3) {
                            newMap.set(x, '#');
                        } else {
                            newMap.set(x, '.');
                        }
                    }
                    if (current === '.') {
                        if (count === 3) {
                            newMap.set(x, '#');
                        } else {
                            newMap.set(x, '.');
                        }
                    }
                }
            }
        }

        /**
         * Recursively count active members.
         * 
         * @param {Map} map 
         */
        const countActive = (map) => {
            let count = 0;
            for (let key of map.keys()) {
                if (typeof map.get(key) === 'object') {
                    count += countActive(map.get(key));
                } else {
                    count += map.get(key) === '#' ? 1 : 0;
                }
            }
            return count;
        }

        // Run simulation for X cycles.
        for (let cycle = 1; cycle <= simulationCycles; cycle++) {
            let newMap = new Map();
            constructMap(newMap, dimensions, cycle, []);
            map = newMap;
        }

        // Return active member count.
        return countActive(map);
    }

    // Construct input map.
    let map = new Map();
    const dim = lines.length;
    for (let y = 0; y < dim; y++) {
        map.set(y, new Map());
        for (let x = 0; x < dim; x++) {
            map.get(y).set(x, lines[y].charAt(x));
        }
    }

    // Part 1
    console.log(runGameOfLife(3, 2, lines.length, map, 6));
    // Part 2
    console.log(runGameOfLife(4, 2, lines.length, map, 6));
})();
