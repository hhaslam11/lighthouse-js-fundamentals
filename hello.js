function sayHello(name) {
  console.log(`Hello, ${name}`);
}

function isEven(num) {
  return (num % 2) === 0;
}

sayHello("Kaleb");
sayHello("Katelyn");
sayHello("Derek");

console.log(isEven(15));
console.log(isEven(256));
console.log(isEven(0));
console.log(isEven(-16));