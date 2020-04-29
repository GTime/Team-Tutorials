// const average = (items = []) => {
//   let totalSumItems = 0;

//   // Get total number of scores and call it numberOfScores
//   let totalNumberItems = items.length;

//   // Calculate the sum of scores and call it totalScore
//   for (const item of items) {
//     totalSumItems += item;
//   }

//   // Divide totalScore by numberOfScores and call it average
//   let result = totalSumItems / totalNumberItems;

//   // Ouptput average
//   return result;
// };

/* Refactored Average*/
const average = (items = []) => {
  numberItems = items.length;
  sum = items.reduce((prevVal, currVal) => prevVal + currVal);
  return sum / numberItems;
};

/* Main */
const main = async () => {
  // Get scores from user
  // Calculate the sum of scores and call it totalScore
  // Get total number of scores and call it numberOfScores
  // Divide totalScore by numberOfScores and call it average
  // Ouptput average

  const items = [10.5, 0.0, 30.5, 100];
  console.log(average(items));

  // Play
  // const a = ["Aid0o", "Paa-Kofi", "Jeme"];
  // const i = a.reduce((pre, cur) => `${pre}/${cur}`);
  // console.log(i);
};

main();
