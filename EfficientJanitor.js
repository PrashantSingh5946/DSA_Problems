// Given weights : [1.99, 1.01, 2.5, 1.5, 1.01]
// Maximum bag size is 3.0 find the minimum number trips required by the janitor to dump the garbage.


const minimumNoOfTrips = (weights) => {

    let trips = 0;
    weights.sort();
    for (let i = 0; i < weights.length;) {
        let totalWeight = 0;
        for (let j = 0; j + i < weights.length + 1; j++) {
            if (totalWeight + weights[i + j] <= 3) {
                totalWeight = totalWeight + weights[i + j];
            }
            else {
                trips++;
                i = i + j;
                break;
            }
        }
    }

    return trips;

}


minimumNoOfTrips([1.99, 1.01, 2.5, 1.5, 1.01, 1.5, 1]);