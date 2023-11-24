/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const biggestPile = Math.max(...piles);
  let k =-1;
  let left = 1;
  let right = biggestPile;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let totalTime = 0;
    for (let i = 0; i < piles.length; i++) {
      totalTime += Math.ceil(piles[i] / mid);
    }
    if (totalTime > h) {
      left = mid + 1;
    } else if (totalTime <= h) {
      k = mid;
      right = mid - 1;
    } 
  }
  return k;
};