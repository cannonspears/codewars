/**
 * @param {number[]} prices
 * @return {number}
 */

// Brute force method: O(n^2)
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let currentProfit = prices[j] - prices[i];
      if (currentProfit > profit) {
        profit = currentProfit;
      }
    }
  }
  return profit;
};

// Sliding window method: O(n)
var maxProfit = function (prices) {
  let profit = 0;
  let stockToBuy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (stockToBuy > prices[i]) {
      stockToBuy = prices[i];
    }
    const currentProfit = prices[i] - stockToBuy;
    if (currentProfit > profit) profit = currentProfit;
  }
  return profit;
};
