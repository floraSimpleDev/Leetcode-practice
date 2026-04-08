// Last updated: 08/04/2026, 21:05:38
1/**
2 * @param {number[][]} intervals
3 * @return {boolean}
4 */
5var canAttendMeetings = function(intervals) {
6    intervals.sort((a, b) => a[0] - b[0]);
7
8    for (let i = 0; i < intervals.length - 1; i++) {
9        if (intervals[i][1] > intervals[i + 1][0]) return false;
10    }
11
12    return true;
13};