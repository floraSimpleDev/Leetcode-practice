// Last updated: 15/08/2026, 16:40:47
/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    let i = 0, j = 0, count = 0;

    while (i < players.length && j < trainers.length) {
        if (players[i] <= trainers[j]) {
            i++, j++, count++;
        } else {
            j++;
        }
    }

    return count;
};