export const durationCalculate = (from: string, to: string) => {
  let myFromDate = from.split('.');
  let fromDateSum =
    Number(myFromDate[2]) * 365 + Number(myFromDate[1]) * 30 + Number(myFromDate[0]);

  let myToDate = to.split('.');
  let toDateSum = Number(myToDate[2]) * 365 + Number(myToDate[1]) * 30 + Number(myToDate[0]);

  let result = toDateSum - fromDateSum;
  return result;
};
