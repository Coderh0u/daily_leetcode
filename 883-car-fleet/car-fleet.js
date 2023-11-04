/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const carStats = [];
  let fleet = 1;
  for (let i = 0; i < position.length; i++) {
    carStats.push([position[i], speed[i]]);
  }
  carStats.sort((a, b) => b[0] - a[0]);
 
  let time = (target - carStats[0][0]) / carStats[0][1];
  console.log("init", time);
  for (let i = 0; i < carStats.length; i++) {
    if (time < (target - carStats[i][0]) / carStats[i][1]) {
      fleet++;
      time = (target - carStats[i][0]) / carStats[i][1];
    }
    
  }
  return fleet;
};