// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++){
    if (max < arr[i]){
      max = arr[i];
    }if (min > arr[i]){
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
    if(max < worker(arrOfArr[i]));
    max = worker(arrOfArr[i]);
  }
  return max;
}


// Задание 3
function worker2(arr) {
 let min = max = arr[0];
 for(let i = 0; i < arr.length; i++){
  if(max< arr[i]){
    max = arr[i];
  }
  if(min > arr[i]){
    min = arr[i];
  }
 }
 return max - min;
}
