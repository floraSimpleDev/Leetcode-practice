// Last updated: 16/04/2026, 13:54:54
1/**
2 * @param {number[]} players
3 * @param {number[]} trainers
4 * @return {number}
5 */
6var matchPlayersAndTrainers = function(players, trainers) {
7    players.sort((a, b) => a - b);
8    trainers.sort((a, b) => a - b);
9
10    let i = 0, j = 0, count = 0;
11
12    while (i < players.length && j < trainers.length) {
13        if (players[i] <= trainers[j]) {
14            i++, j++, count++;
15        } else {
16            j++;
17        }
18    }
19
20    return count;
21};