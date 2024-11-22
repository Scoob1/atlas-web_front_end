// start of the execution queue
console.log("Start of the execution queue");

// setTimeout with a delay of 0
setTimeout(() => {
    console.log("Final code block to be executed");
}, 0);

// Loop numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("End of the loop printing");
