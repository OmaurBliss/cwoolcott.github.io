
// Convert js to ts, then add "export { }" to top
// assign let/const and Basic types
// Yypes = boolean, number, string, any, unknown, null
// Basic Types: let {letname}: {type} = {value};
// Union Types: let {letname}: {type} | {type} = {value};

let petName : string = "Mr. Pants";
let petType : string = "cat";
let petAge = 10;
let isSleeping = true;
let nextYearAge = petAge + 1;

let petGreeting = `${petName} is a ${petType}. Next year ${petName} will be ${nextYearAge} years old.`;

if (isSleeping) {
    isSleeping = 8;
}

let sleepingStatus = `${petName} has been sleeping for ${isSleeping} hours.`;

console.log(petGreeting);
console.log(sleepingStatus);



