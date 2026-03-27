// Last updated: 27/03/2026, 22:26:56
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let minPrice = Number.MAX_VALUE;
7    let maxProfit = 0;
8
9    for (let price of prices) {
10        if (price < minPrice) {
11            minPrice = price;
12        }
13        /* else if (price - minPrice > maxProfit) {
14            maxProfit = price - minPrice;
15        } */
16        maxProfit = Math.max(maxProfit, price - minPrice)
17    }
18
19    return maxProfit;
20};