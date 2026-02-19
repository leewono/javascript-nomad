alert("hi");

/**
 * const = 재할당 불가능(고정값)
 * let = 재할당 가능
 */
const a = 5;
const b = 2;
let myName = "ho";

console.log(a + b);
console.log(myName);

myName = "lee";
console.log(myName);

// Boolean, Array 패스

/**
 * objects
 *
 */

const player = {
  name: "ho",
  points: 10,
};

console.log(player);
console.log(player.name);
