// Last updated: 27/03/2026, 22:32:06
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let minPrice = Number.MAX_VALUE;
7    let maxProfit = 0;
8
9    for (let price of prices) {
10        /* if (price < minPrice) {
11            minPrice = price;
12        } */
13        minPrice = Math.min(price, minPrice);
14
15        maxProfit = Math.max(maxProfit, price - minPrice)
16    }
17
18    return maxProfit;
19};