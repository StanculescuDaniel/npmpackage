const sluggerModule = require("./index");
const slugger = sluggerModule.slugger;

const result = slugger("I", "am", "here");
console.log(result);