const input = prompt("Enter a number:");

if (input === null) {
  console.log("Input cancelled by the user.");
} else {
  const n = Number(input);

  if (isNaN(n)) {
    console.log("Invalid input. Please enter a number.");
  } else {
    if (n > 0) {
      let isPrime = true;
      for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(n + " is a prime number.");
      } else {
        console.log(n + " is not a prime number.");
      }
    } else {
      console.log("Number should be positive and greater than zero.");
    }
  }
}
