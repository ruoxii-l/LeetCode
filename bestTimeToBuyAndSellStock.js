/**
 * Easy
 * Runtime: 130 ms beats 8.25%
 * Memory: 51 MB beats 97.55%
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 1) {
        return 0
    }

    let profit = 0;

    let tempMin = 0;
    let tempMax = 0;
    let tempProfit = 0;
    let counter = 0;

    let initialPoint = false;
    let i = 1;

    while (counter < prices.length) {
        for (i; i < prices.length; i++) {
            if (!initialPoint) {
                if ((prices[i] - prices[i - 1]) <= 0) {
                    if (i === (prices.length - 1)) {
                        return profit
                    }
                    profit
                } else {
                    tempMin = i - 1
                    tempMax = i
                    profit = prices[tempMax] - prices[tempMin]
                    initialPoint = true
                }
            }

            if (initialPoint && (prices[i] > prices[tempMax])) {
                tempMax = i
                profit = prices[tempMax] - prices[tempMin]
            }
        }

        for (i = (tempMin + 1); i < tempMax; i++) {
            if (initialPoint && (prices[tempMin] !== 0) && (prices[i] < prices[tempMin])) {
                tempMin = i
                profit = prices[tempMax] - prices[tempMin]
            }
        }

        i = tempMax + 1;
        counter = tempMax + 1;
        initialPoint = false;
        if (profit < tempProfit) {
            profit = tempProfit
        }
        tempProfit = profit
    }

    return profit
};