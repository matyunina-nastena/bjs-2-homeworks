function getArrayParams(...arr) {
let min =  arr[0];
let max = min;
let avg = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++){
  if (arr[i] > max) {
    max = arr[i]; 
  } else if (arr[i] < min) { 
    min = arr[i];
  } 
  sum += arr[i];
} 
avg = sum / arr.length;
  avg = Number ((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}





function summElementsWorker(...arr) {
  let initialValue = 0;
  if (arr.length == 0) {
    return 0;
  }
  sum = arr.reduce(
    (currentSum, currentNumber) => currentSum + currentNumber, initialValue
  );
  return sum
}

function differenceMaxMinWorker(...arr) {
  let difference = 0;
  if (arr.length == 0) {
    return 0;
  }
  if (arr.length > 0) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  difference = max - min;
  }
  return difference;
}


function differenceEvenOddWorker(...arr) {
  let difference = 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length == 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) == 0) {
      sumEvenElement += arr[i];
    } else sumOddElement += arr[i];
  }
  difference = sumEvenElement - sumOddElement;

  return difference;

}

function averageEvenElementsWorker(...arr) {
  let average = 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length == 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  
  average = sumEvenElement / countEvenElement;

  return average;


}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}
