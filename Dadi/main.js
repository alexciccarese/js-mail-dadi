let pcNumber = Math.floor(Math.random() * (6 - 1) + 1)
console.log(pcNumber);

let userNumber = Math.floor(Math.random() * (6 - 1) + 1)
console.log(userNumber);


if (pcNumber > userNumber) {
  console.log('PC win - YOU Lose');
  
} else if (pcNumber < userNumber) {
  console.log('YOU win - PC Lose');
  
} else {
  console.log('Is a tie');
  
}