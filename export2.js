let checkPrime = (num) => {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      count++;
      break;
    }
  }
  if (count == 0 && num > 1) {
    console.log(`The number ${num} is Prime`);
  } else {
    console.log(`The number ${num} is Not Prime`);
  }
};

let checkEven = (num) => {
  if (num % 2 == 0) {
    console.log(`The number ${num} is Even`);
  } else {
    console.log(`The number ${num} is Odd`);
  }
};

let checkArmstrong = (num) => {
  let sum = 0,
    temp = num,
    remainder;
  while (temp != 0) {
    remainder = temp % 10;
    sum += Math.pow(remainder, 3);
    temp = Math.floor(temp / 10);
  }
  if (sum == num) {
    console.log(`The number ${num} is Armstrong`);
  } else {
    console.log(`The number ${num} is Not Armstrong`);
  }
};

let allFunctions = {
  checkPrime: checkPrime,
  checkEven: checkEven,
  checkArmstrong: checkArmstrong,
};


export default allFunctions;