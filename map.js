
const names = ["kevin", "andrew", "gurpinder", "jamison", "samuel", ""];

//key point - map converts an array to another array

const lengthsOfNames = names.map(el => el.length); //strings -> ints
const uppercase = names.map(el => el.toUpperCase()); //strings -> strings
const empty = names.map(el => el.length === 0); //strings -> booleans
const objects = names.map(el => { 
    return { 
        name: el,
        classTitle: "SDEV 355",
        senior: true, 
        gpa: 4.0
    } 
}); //strings -> objects

console.log(names);
console.log(lengthsOfNames);
console.log(uppercase);
console.log(empty);
console.log(objects);

names.forEach((el, idx) => {
    console.log(idx, el);
})