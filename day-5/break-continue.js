// break and continue
// break: exit the loop
// continue: skip the current iteration and move to the next one

// break example
console.log("Break example:");

for (let i = 1; i <= 20; i++) {
  if (i === 11) break;
  else console.log(i);
}

// continue example
console.log("Continue example:");

for (let i = 1; i <= 20; i++) {
  if (i === 11) continue;
  else console.log(i);
}
